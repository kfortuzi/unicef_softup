#!/bin/bash
echo -e '\e[1m\e[34mStarting migration...\e[0m\n'
cd /home/ubuntu/deployment

export ENVIRONMENT=$ENVIRONMENT
export AWS_ECR_URI="618228892382.dkr.ecr.eu-central-1.amazonaws.com/akpa-ai-db-migration-repository-$ENVIRONMENT"
export AWS_REGION=eu-central-1

source .env.$ENVIRONMENT

aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ECR_URI

echo -e '\e[1m\e[34mRunning migration container...\e[0m\n'

docker pull $AWS_ECR_URI

docker run -e DATABASE_URL=$DATABASE_URL $AWS_ECR_URI

echo -e '\e[1m\e[34mSuccessfully run migrations...\e[0m\n'

