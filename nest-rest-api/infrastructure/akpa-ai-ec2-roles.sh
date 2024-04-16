#!/bin/bash

# Version and ENVIRONMENT are set in pipeline
# set -Eeuo pipefail

source ../../bash_utils/params.sh
source ../../bash_utils/stack.sh

check_environment_var

AWS_REGION=eu-central-1

ecr_stack_output=$(stack_output akpa-ai-ecr)

images_s3_stack_output=$(stack_output akpa-ai-images-s3-$ENVIRONMENT)
images_bucket_name=$(param_from_stack_output "$images_s3_stack_output" BucketName)

strapi_s3_stack_output=$(stack_output akpa-ai-strapi-s3-$ENVIRONMENT)
strapi_bucket_name=$(param_from_stack_output "$strapi_s3_stack_output" BucketName)

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-ec2-roles-$ENVIRONMENT \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file ./stacks/akpa-ai-ec2-roles-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName=$ENVIRONMENT \
                        ImagesBucketName=$images_bucket_name \
                        StrapiBucketName=$strapi_bucket_name
