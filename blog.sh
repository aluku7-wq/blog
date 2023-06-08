#!/bin/bash

# Docker Hub repository details
DOCKER_REPO="aluku/image"
DOCKER_IMAGE_TAG="blog"

# Decrypt the config.env.gpg file and store the decrypted content in a temporary file
gpg -d config.env.gpg > temp_config.env

# Load the decrypted configuration file
source temp_config.env

# Clean up the temporary file
rm temp_config.env

# Log in to Docker Hub
docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"

# Pull the image from the private repository
docker pull "$DOCKER_REPO:$DOCKER_IMAGE_TAG"

# run docker compose file to create or update stack
docker stack deploy -c docker-compose.yml blog


# Get the Image IDs of the images with the specified tag from deleting
IMAGE_IDS_TO_KEEP=$(docker images | awk -v tag="$DOCKER_IMAGE_TAG" '$2 == tag { print $3 }')

# Get a list of all Image IDs except the ones to keep
IMAGE_IDS_TO_DELETE=$(docker images -q | grep -v -f <(echo "$IMAGE_IDS_TO_KEEP"))

# Delete the duplicate images
docker rmi $IMAGE_IDS_TO_DELETE
