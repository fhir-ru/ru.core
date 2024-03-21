COMMIT_HASH := $(shell git rev-parse --short=7 HEAD)

docker-build:
	docker build . -t healthsamurai/fhir-ru-core:$(COMMIT_HASH) -t healthsamurai/fhir-ru-core:latest

docker-run:
	docker run -d -p 8080:8080 -p 8081:8081 -p 8082:8082 -p 8083:8083 healthsamurai/fhir-ru-core:latest

compose-up:
	docker-compose up -d

compose-down:
	docker-compose down
