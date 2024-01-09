#!/bin/bash

# Replace names in '[]'

set -Eeuo pipefail

aws s3 cp "softup-x-api-${VERSION}.zip" "s3://[artifacts bucket name]/[path]/[zip name]" --no-progress