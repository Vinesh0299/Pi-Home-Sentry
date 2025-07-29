#!/bin/bash

# Stop the previously running container
docker stop golang_env

# Remove the previously running container
docker container rm golang_env

# Create a docker container which maps /root directory to current host machine directory
docker run -it -v /home/vinesh/Projects/Pi-Home-Sentry/Backend:/root -w /root --network=host --name golang_env golang:tip-alpine3.22
