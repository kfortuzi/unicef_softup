#!/bin/bash

set -Eeuo pipefail

source ../../bash_utils/params.sh

AWS_REGION=eu-central-1

check_environment_var

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name softup-x-s3-$ENVIRONMENT \
  --template-file stacks/softup-x-s3-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName="$ENVIRONMENT"
