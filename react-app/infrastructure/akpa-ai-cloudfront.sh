#!/bin/bash

set -Eeuo pipefail

source ../../bash_utils/params.sh
source ../../bash_utils/stack.sh

check_environment_var

AWS_REGION=eu-central-1

bucket_output=$(stack_output akpa-ai-s3-$ENVIRONMENT)
bucket_name=$(param_from_stack_output "$bucket_output" BucketName)

oac_output=$(stack_output akpa-ai-cloudfront-oac-$ENVIRONMENT)
oac_id=$(param_from_stack_output "$oac_output" OriginAccessControlID)

# TODO: Domain name example
tld='punesim.ai'
# if [[ $ENVIRONMENT == 'prod' ]]; then
#   domain_name="example.$tld"
# else
#   domain_name="example-$ENVIRONMENT.$tld"
# fi

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-cloudfront-$ENVIRONMENT \
  --template-file stacks/akpa-ai-cloudfront-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName="$ENVIRONMENT" \
                        BucketName="$bucket_name" \
                        OriginAccessControlID="$oac_id" \
                        DomainName="$tld"
