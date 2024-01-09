#!/bin/bash

set -Eeuo pipefail

apt-get update && apt-get install -y zip

npm run build

apt-get update && apt-get install -y zip
zip -qq -r "akpa-ai-api-${VERSION}.zip" dist
