#!/bin/bash

set -Eeuox pipefail

./softup-x-api-lambda-role.sh
./softup-x-api-lambda.sh
./softup-x-api-gateway.sh
