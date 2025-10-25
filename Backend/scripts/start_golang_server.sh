#!/bin/bash
docker start golang_env

# enter the container
docker exec -it golang_env /bin/sh
