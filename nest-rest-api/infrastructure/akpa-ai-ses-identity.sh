#!/bin/bash

set -Eeuo pipefail

source ../../bash_utils/params.sh

check_environment_var

AWS_REGION=eu-central-1

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-ses-identity \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file ./stacks/akpa-ai-ses-identity-stack.yaml \
  --no-fail-on-empty-changeset
