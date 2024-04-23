#!/bin/bash

set -Eeuo pipefail

AWS_REGION=eu-central-1

aws cloudformation deploy \
    --region $AWS_REGION \
    --stack-name akpa-ai-route53 \
    --template-file akpa-ai-route53.yaml \
    --no-fail-on-empty-changeset