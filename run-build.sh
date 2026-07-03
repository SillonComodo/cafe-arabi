#!/bin/bash
# Compilar la aplicación en una página web estática (en dist/) usando el Node.js local (v20)
cd "$(dirname "$0")"
export PATH="$(pwd)/.node/bin:$PATH"
npm run build
