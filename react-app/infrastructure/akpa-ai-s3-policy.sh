#!/bin/bash

set -Eeuo pipefail

source ../../bash_utils/params.sh
source ../../bash_utils/stack.sh

AWS_REGION=eu-central-1

check_environment_var

cloud_front_ouput=$(stack_output akpa-ai-cloudfront-$ENVIRONMENT)
cloud_front_distribution=$(param_from_stack_output "$cloud_front_ouput" CloudFrontDistributionID)

bucket_output=$(stack_output akpa-ai-s3-$ENVIRONMENT)
bucket_name=$(param_from_stack_output "$bucket_output" BucketName)

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-s3-policy-$ENVIRONMENT \
  --template-file stacks/akpa-ai-s3-policy-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName="$ENVIRONMENT" \
                        BucketName="$bucket_name" \
                        CloudFrontDistribution="$cloud_front_distribution"
