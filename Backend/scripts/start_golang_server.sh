#!/bin/bash
docker start golang_env

# enter the container
docker exec -it -u vinesh golang_env /bin/sh
