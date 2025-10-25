#!/bin/bash

# Create a docker container which maps /root directory to current host machine directory
docker run -it -v "$(pwd)":/root -w /root --network=host --name golang_env golang:tip-alpine3.22
