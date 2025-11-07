#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")"/.. && pwd)"
K8S_DIR="$ROOT_DIR/k8s"

if [[ -n "${KUBECONFIG:-}" ]]; then
  echo "Using kubeconfig at $KUBECONFIG"
fi

echo "Applying Kubernetes manifests..."
kubectl apply -f "$K8S_DIR/deployment.yaml"
kubectl apply -f "$K8S_DIR/service.yaml"
kubectl apply -f "$K8S_DIR/ingress.yaml"

echo "Deployment applied."

