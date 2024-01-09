#!/bin/bash

set -Eeuo pipefail

source ../../bash_utils/params.sh

AWS_REGION=eu-central-1

check_environment_var

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-cloudfront-oac-$ENVIRONMENT \
  --template-file stacks/akpa-ai-cloudfront-oac-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName="$ENVIRONMENT"