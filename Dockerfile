FROM nginx:alpine

RUN apk add --no-cache git bash rsync

ENV GIT_REPO=""
ENV GIT_BRANCH="main"
ENV IG_BRANCH="build"
ENV POLL_INTERVAL="60"

COPY nginx.conf /etc/nginx/nginx.conf
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/docker-entrypoint.sh"]
