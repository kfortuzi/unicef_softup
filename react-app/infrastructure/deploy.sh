#!/bin/bash

set -Eeuox pipefail

./akpa-ai-s3.sh
./akpa-ai-cloudfront-oac.sh
./akpa-ai-cloudfront.sh
./akpa-ai-s3-policy.sh
