function get_secret_value {
      aws secretsmanager get-secret-value \
        --region $AWS_REGION \
        --secret-id "$1" \
        --query SecretString \
        --output text \
        |  jq -r --arg secretKey "$2" '.[$secretKey]'
}
