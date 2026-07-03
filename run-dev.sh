#!/bin/bash
# Iniciar el servidor de desarrollo local con el Node.js local (v20)
cd "$(dirname "$0")"
export PATH="$(pwd)/.node/bin:$PATH"
npm run dev
