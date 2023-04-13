#!/bin/bash

cd ..

# Build and push the backend container
cd backend/django-api
docker build . -t django:latest
docker tag django:latest registry.deti:5000/gic/g9/django:latest
docker push registry.deti:5000/gic/g9/django:latest

# Build and push the frontend container
cd ../../frontend
docker build . -t react:latest
docker tag react:latest registry.deti:5000/gic/g9/react:latest
docker push registry.deti:5000/gic/g9/react:latest