#!/bin/bash

set -Eeuox pipefail

./akpa-ai-vpc.sh
./akpa-ai-images-s3.sh
./akpa-ai-ecr.sh
./akpa-ai-ec2-roles.sh
./akpa-ai-ec2.sh
./akpa-ai-rds.sh