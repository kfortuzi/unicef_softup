#!/bin/bash

echo -e '\e[1m\e[34mStarting deployment...\e[0m\n'
cd /home/ubuntu

export ENVIRONMENT=$ENVIRONMENT
export AWS_ECR_URI="618228892382.dkr.ecr.eu-central-1.amazonaws.com/akpa-ai-repository-$ENVIRONMENT"
export AWS_REGION=eu-central-1
aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ECR_URI

echo -e '\e[1m\e[34mPulling from ECR...\e[0m\n'
docker-compose -f ./deployment/docker-compose.yaml pull

echo -e '\e[1m\e[34mRunning Composer up...\e[0m\n'
docker-compose -f ./deployment/docker-compose.yaml up --remove-orphans -d

echo -e '\e[1m\e[34mPruning VOLUMES...\e[0m\n'

docker system prune --volumes -f

echo -e '\e[1m\e[34mPruning Images...\e[0m\n'
docker image prune -f

echo -e '\e[1m\e[32mDeployment finished!\e[0m'
