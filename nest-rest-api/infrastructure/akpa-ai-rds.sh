#!/bin/bash

# Version and ENVIRONMENT are set in pipeline
set -Eeuo pipefail

source ../../bash_utils/params.sh
source ../../bash_utils/stack.sh

check_environment_var

AWS_REGION=eu-central-1

vpc_stack_output=$(stack_output akpa-ai-vpc-$ENVIRONMENT)
ec2_stack_output=$(stack_output akpa-ai-ec2-$ENVIRONMENT)

vpc_id=$(param_from_stack_output "$vpc_stack_output" VPC)
private_subnet_1=$(param_from_stack_output "$vpc_stack_output" PrivateSubnet1)
private_subnet_2=$(param_from_stack_output "$vpc_stack_output" PrivateSubnet2)
instance_sg_id=$(param_from_stack_output "$ec2_stack_output" AkpaInstanceSecurityGroupId)
instance_rds_sg_id=$(param_from_stack_output "$ec2_stack_output" RDSSecurityGroupId)

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name akpa-ai-rds-$ENVIRONMENT \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file ./stacks/akpa-ai-rds-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides EnvironmentName=$ENVIRONMENT \
                        VpcId=$vpc_id \
                        AkpaInstanceSecurityGroupId=$instance_sg_id \
                        PrivateSubnet1=$private_subnet_1 \
                        PrivateSubnet2=$private_subnet_2 \
                        RDSSecurityGroupId=$instance_rds_sg_id