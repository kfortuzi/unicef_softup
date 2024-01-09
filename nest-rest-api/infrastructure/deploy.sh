#!/bin/bash

set -Eeuox pipefail

./akpa-ai-api-lambda-role.sh
./akpa-ai-api-lambda.sh
./akpa-ai-api-gateway.sh
