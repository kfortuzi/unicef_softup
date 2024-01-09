#!/bin/bash

set -Eeuo pipefail

AWS_REGION=eu-central-1

source ../../bash_utils/stack.sh
source ../../bash_utils/secret_manager.sh
source ../../bash_utils/params.sh

check_environment_var

artifacts_bucket_name='[artifacts bucket name]'
lambda_role_output=$(stack_output softup-x-api-lambda-role-$ENVIRONMENT)
lambda_role_arn=$(param_from_stack_output "$lambda_role_output" LambdaRoleArn)

# TODO: After VPC setup
vpc_network_output=$(stack_output softup-x-vpc-network-$ENVIRONMENT)
vpc_subnet_d_id=$(param_from_stack_output "$vpc_network_output" SubnetDId)
vpc_subnet_e_id=$(param_from_stack_output "$vpc_network_output" SubnetEId)

# TODO: After VPC SG setup

vpc_security_group_output=$(stack_output softup-x-vpc-security-group-$ENVIRONMENT)
vpc_lambda_security_group_id=$(param_from_stack_output "$vpc_security_group_output" LambdaSecurityGroupId)

# Example how to read credentials from secret manager
db_user=$(get_secret_value rds-db-instance-credentials/application-$ENVIRONMENT username)
db_password=$(get_secret_value rds-db-instance-credentials/application-$ENVIRONMENT password)
db_host=$(get_secret_value rds-db-instance-credentials/application-$ENVIRONMENT host)
db_port=$(get_secret_value rds-db-instance-credentials/application-$ENVIRONMENT port)
db_name=$(get_secret_value rds-db-instance-credentials/application-$ENVIRONMENT dbname)

aws cloudformation deploy \
  --region $AWS_REGION \
  --stack-name softup-x-api-lambda-$ENVIRONMENT \
  --capabilities CAPABILITY_NAMED_IAM \
  --template-file stacks/softup-x-api-lambda-stack.yaml \
  --no-fail-on-empty-changeset \
  --parameter-overrides ArtifactsBucket=$artifacts_bucket_name \
                        LambdaExecutionRole=$lambda_role_arn \
                        SubnetDId=$vpc_subnet_d_id \
                        SubnetEId=$vpc_subnet_e_id \
                        Version=$VERSION \
                        EnvironmentName=$ENVIRONMENT \
                        SecurityGroupId=$vpc_lambda_security_group_id \
                        DBUser=$db_user \
                        DBPassword=$db_password \
                        DBHost=$db_host \
                        DBPort=$db_port \
                        DBName=$db_name