#!/bin/bash

set -Eeuo pipefail

source ../../bash_utils/params.sh

check_environment_var

AWS_REGION=eu-central-1

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-ecr-$ENVIRONMENT \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file ./stacks/akpa-ai-ecr-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName=$ENVIRONMENT
