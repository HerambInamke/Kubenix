#!/usr/bin/env bash

set -euo pipefail

REGISTRY="${REGISTRY:-ghcr.io/example}"
FRONTEND_IMAGE_NAME="${FRONTEND_IMAGE_NAME:-kubenix-frontend}"
BACKEND_IMAGE_NAME="${BACKEND_IMAGE_NAME:-kubenix-backend}"
IMAGE_TAG="${IMAGE_TAG:-latest}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"

echo "Building frontend image..."
docker build \
  -f "$ROOT_DIR/docker/frontend.Dockerfile" \
  -t "$REGISTRY/$FRONTEND_IMAGE_NAME:$IMAGE_TAG" \
  "$ROOT_DIR"

echo "Building backend image..."
docker build \
  -f "$ROOT_DIR/docker/backend.Dockerfile" \
  -t "$REGISTRY/$BACKEND_IMAGE_NAME:$IMAGE_TAG" \
  "$ROOT_DIR"

echo "Pushing images to $REGISTRY..."
docker push "$REGISTRY/$FRONTEND_IMAGE_NAME:$IMAGE_TAG"
docker push "$REGISTRY/$BACKEND_IMAGE_NAME:$IMAGE_TAG"

echo "Build and push complete."

