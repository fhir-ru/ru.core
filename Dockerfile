FROM clojure:temurin-17-tools-deps-jammy

WORKDIR /app

COPY . .

RUN curl -fsSL https://deb.nodesource.com/setup_21.x | bash
RUN apt-get update && apt-get install ruby-full build-essential zlib1g-dev make nginx nodejs -y

RUN gem install jekyll bundler
RUN npm install -g fsh-sushi@latest

ARG CACHE_DATE;

RUN clojure -M:download-deps

RUN cd RuCoreIG && ./_updatePublisher.sh -y
RUN cd RuCoreIG && ./_genonce.sh

RUN cd RuLabIG && ./_updatePublisher.sh -y
RUN cd RuLabIG && ./_genonce.sh

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080
EXPOSE 8081
EXPOSE 8082
 
ENTRYPOINT clojure -M:run-cloud & nginx -g 'daemon off;';
