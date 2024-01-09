#!/bin/bash

# Version and ENVIRONMENT are set in pipeline
set -Eeuo pipefail


AWS_REGION=eu-central-1

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-ecr \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file ./stacks/akpa-ai-ecr-stack.yaml \
  --no-fail-on-empty-changeset