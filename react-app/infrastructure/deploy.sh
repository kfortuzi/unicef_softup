#!/bin/bash

set -Eeuox pipefail

./softup-x-s3.sh
./softup-x-cloudfront-oac.sh
./softup-x-cloudfront.sh
./softup-x-s3-policy.sh
