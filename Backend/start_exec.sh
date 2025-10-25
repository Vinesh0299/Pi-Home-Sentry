docker rmi pi-home-sentry
docker build -t pi-home-sentry .
docker run --rm -p 8080:8000 --env-file .env pi-home-sentry