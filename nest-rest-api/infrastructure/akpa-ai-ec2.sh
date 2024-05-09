#!/bin/bash

# Version and ENVIRONMENT are set in pipeline
# set -Eeuo pipefail

source ../../bash_utils/params.sh
source ../../bash_utils/stack.sh

check_environment_var

AWS_REGION=eu-central-1

vpc_stack_output=$(stack_output akpa-ai-vpc-$ENVIRONMENT)

vpc_id=$(param_from_stack_output "$vpc_stack_output" VPC)
public_subnet_1=$(param_from_stack_output "$vpc_stack_output" PublicSubnet1)

ec2_roles_outuput=$(stack_output akpa-ai-ec2-roles-$ENVIRONMENT)
instance_role_name=$(param_from_stack_output "$ec2_roles_outuput" AkpaEc2InstanceRoleName)

if [[ $ENVIRONMENT == 'prod' ]]; then
  keypair_name="akpa-ai-prod"
else
  keypair_name="akpa-ai-dev"
fi

user_data=$(cat user-data.sh | base64)

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-ec2-$ENVIRONMENT \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file ./stacks/akpa-ai-ec2-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName=$ENVIRONMENT \
                        VpcId=$vpc_id \
                        PublicSubnet1=$public_subnet_1 \
                        KeyPairName=$keypair_name \
                        UserData="$user_data" \
                        InstanceRole="$instance_role_name"
