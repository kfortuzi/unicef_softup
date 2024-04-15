#!/bin/bash

set -Eeuo pipefail

aws s3 sync "../dist/" "s3://akpa-ai-ui-$ENVIRONMENT/" --exclude index.html  --cache-control "public,max-age=31536000" --no-progress
aws s3 cp "../dist/index.html" "s3://akpa-ai-ui-$ENVIRONMENT/index.html" --cache-control "public,max-age=10" --no-progress
