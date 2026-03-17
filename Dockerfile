FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

RUN curl -fsSL https://deb.nodesource.com/setup_21.x | bash && \
    apt-get update && apt-get install -y ruby-full build-essential zlib1g-dev nginx nodejs && \
    gem install jekyll bundler && \
    npm install -g fsh-sushi@latest && \
    rm -rf /var/lib/apt/lists/*

COPY . .

RUN cd RuCoreIG && ./_updatePublisher.sh -y
RUN cd RuCoreIG && ./_genonce.sh

# RUN cd RuLabIG && ./_updatePublisher.sh -y
# RUN cd RuLabIG && ./_genonce.sh

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8081
EXPOSE 8084
EXPOSE 8085

ENTRYPOINT ["nginx", "-g", "daemon off;"]
