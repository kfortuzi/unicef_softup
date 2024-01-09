#!/bin/bash

set -Eeuo pipefail

AWS_REGION=eu-central-1

source ../../bash_utils/stack.sh
source ../../bash_utils/params.sh

check_environment_var

artifacts_bucket_name='[artifacts bucket name]'

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-api-lambda-role-$ENVIRONMENT \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file stacks/akpa-ai-api-lambda-role-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides ArtifactsBucket=$artifacts_bucket_name \
                        EnvironmentName=$ENVIRONMENT