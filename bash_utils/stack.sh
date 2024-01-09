function generate_stack_with_ts {
  timestamp=$(date +"%s")
  sed "s/%timestamp%/$timestamp/g" $1 > $2
}

function stack_output {
  aws cloudformation describe-stacks \
    --region $AWS_REGION \
    --stack-name $1 \
    --output text \
    --query 'Stacks[*].Outputs[*].[OutputKey, OutputValue]'
}

function param_from_stack_output {
  # -w to match the full word of a variable since we might have similar names which collision
  echo "$1" | grep -w "$2" | awk '{print $2}'
}
