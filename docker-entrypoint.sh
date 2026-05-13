#!/bin/bash
set -e

REPO_DIR="/data/repo"
IG_DIR="/data/ig"
SITE_DIR="/site"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1"
}

setup_git_auth() {
    if [ -n "$GIT_TOKEN" ]; then
        log "Configuring git authentication"
        git config --global credential.helper 'store'
        echo "https://x-access-token:${GIT_TOKEN}@github.com" > ~/.git-credentials
    fi
}

git_url() {
    local url="$1"
    if [ -n "${GITHUB_TOKEN:-}" ] && echo "$url" | grep -q "https://github.com"; then
        echo "$url" | sed "s|https://github.com|https://${GITHUB_TOKEN}@github.com|"
    else
        echo "$url"
    fi
}

# Clone or pull a branch. Returns 0 if changes detected, 1 if no changes.
clone_or_pull() {
    local dir="$1"
    local branch="$2"
    local url
    url=$(git_url "$GIT_REPO")

    if [ -d "$dir/.git" ]; then
        cd "$dir"
        git fetch origin "$branch" 2>/dev/null || return 1
        local local_rev remote_rev
        local_rev=$(git rev-parse HEAD)
        remote_rev=$(git rev-parse "origin/$branch")
        if [ "$local_rev" != "$remote_rev" ]; then
            log "Changes on $branch, updating..."
            git reset --hard "origin/$branch"
            return 0
        fi
        return 1
    else
        log "Cloning $branch into $dir..."
        mkdir -p "$dir"
        cd "$dir"
        git init -q
        git remote add origin "$url"
        git fetch -q --depth 1 origin "$branch"
        git -c advice.detachedHead=false checkout -f "origin/$branch"
        return 0
    fi
}

# Assemble /site/ from repo content
assemble_site() {
    log "Assembling site..."
    mkdir -p "$SITE_DIR/ig"

    # newLanding -> /site/ (landing, apps, spec, what-is-fhir)
    rsync -a --delete "$REPO_DIR/newLanding/" "$SITE_DIR/" --exclude .git

    # IGIndex -> /site/ig/
    rsync -a "$REPO_DIR/IGIndex/" "$SITE_DIR/ig/"

    # IG output -> /site/ig/core/ (if available)
    if [ -d "$IG_DIR" ] && [ -f "$IG_DIR/index.html" ]; then
        mkdir -p "$SITE_DIR/ig/core"
        rsync -a --delete "$IG_DIR/" "$SITE_DIR/ig/core/" --exclude .git
    fi

    log "Site assembled"
}

cleanup() {
    log "Shutting down..."
    nginx -s quit 2>/dev/null || true
    exit 0
}

trap cleanup SIGTERM SIGINT

# Validate
if [ -z "$GIT_REPO" ]; then
    log "ERROR: GIT_REPO is required"
    exit 1
fi

# Initial setup
setup_git_auth
clone_or_pull "$REPO_DIR" "$GIT_BRANCH" || true
clone_or_pull "$IG_DIR" "$IG_BRANCH" || log "IG branch '$IG_BRANCH' not available yet"
assemble_site

# Start nginx in background (so we can poll). -g 'daemon off;' keeps nginx
# in the foreground so $! is the master PID — otherwise nginx forks and
# daemonizes, leaving us tracking an already-exited shell child.
log "Starting nginx..."
nginx -g 'daemon off;' &
NGINX_PID=$!

# Poll loop
log "Polling every ${POLL_INTERVAL}s"
while true; do
    sleep "$POLL_INTERVAL"

    CHANGED=0

    if clone_or_pull "$REPO_DIR" "$GIT_BRANCH"; then
        CHANGED=1
    fi

    if clone_or_pull "$IG_DIR" "$IG_BRANCH"; then
        CHANGED=1
    fi

    if [ "$CHANGED" -eq 1 ]; then
        assemble_site
    fi

    # Check nginx is alive
    if ! kill -0 "$NGINX_PID" 2>/dev/null; then
        log "nginx died, restarting..."
        nginx -g 'daemon off;' &
        NGINX_PID=$!
    fi
done
