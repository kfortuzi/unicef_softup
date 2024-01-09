#!/bin/bash

# Version and ENVIRONMENT are set in pipeline
set -Eeuo pipefail

source ../../bash_utils/stack.sh
source ../../bash_utils/params.sh

check_environment_var

AWS_REGION=eu-central-1

api_lambda_output=$(stack_output softup-x-api-lambda-$ENVIRONMENT)
api_lambda_arn=$(param_from_stack_output "$api_lambda_output" LambdaARN)

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name softup-x-api-gateway-$ENVIRONMENT \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file stacks/softup-x-api-gateway-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName=$ENVIRONMENT \
                        LambdaArn=$api_lambda_arn \
                        Version=$VERSION
