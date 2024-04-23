source ../../bash_utils/params.sh
source ../../bash_utils/secret_manager.sh
source ../../bash_utils/stack.sh

check_environment_var

AWS_REGION=eu-central-1

server_port=3000
fe_host="https://db6acida7ydfm.cloudfront.net" # TODO: Temp only for demo
akpa_base_job_url="https://www.puna.gov.al/shkp_api/odoo/getJob/"
akpa_featured_jobs_url="https://www.puna.gov.al/shkp_api/odoo_post/getFeaturedJobs/5000/1"
strapi_base_url="http://strapi:1337/api"
strapi_token="token" #TODO: Store the tokens in secret manager

db_user=$(get_secret_value rds-db-instance-credentials/master-$ENVIRONMENT username)
db_password=$(get_secret_value rds-db-instance-credentials/master-$ENVIRONMENT password)
db_host=$(get_secret_value rds-db-instance-credentials/master-$ENVIRONMENT host)
db_port=$(get_secret_value rds-db-instance-credentials/master-$ENVIRONMENT port)
db_name=$(get_secret_value rds-db-instance-credentials/master-$ENVIRONMENT dbname)

strapi_db_name=$(get_secret_value rds-db-instance-credentials/strapi-$ENVIRONMENT dbname)
strapi_jwt_secret=$(get_secret_value $ENVIRONMENT/strapi strapiJwtSecret)
strapi_admin_jwt_secret=$(get_secret_value $ENVIRONMENT/strapi strapiAdminJwtSecret)
strapi_app_keys=$(get_secret_value $ENVIRONMENT/strapi strapiAppKeys)
strapi_api_token_salt=$(get_secret_value $ENVIRONMENT/strapi strapiApiTokenSalt)
strapi_transfer_token_salt=$(get_secret_value $ENVIRONMENT/strapi strapiTransferTokenSalt)

akpa_images_s3_stack_output=$(stack_output akpa-ai-images-s3-$ENVIRONMENT)
images_s3_bucket_name=$(param_from_stack_output "$akpa_images_s3_stack_output" BucketName)

akpa_strapi_s3_stack_output=$(stack_output akpa-ai-strapi-s3-$ENVIRONMENT)
strapi_s3_bucket_name=$(param_from_stack_output "$akpa_strapi_s3_stack_output" BucketName)

db_connection_url="postgresql://$db_user:$db_password@$db_host:$db_port/$db_name?schema=public"
openai_api_key="$OPEN_AI_KEY_DEV"

# API env file
echo "DATABASE_URL=$db_connection_url" >> .env.$ENVIRONMENT
echo "SERVER_PORT=$server_port" >> .env.$ENVIRONMENT
echo "FE_HOST=$fe_host" >> .env.$ENVIRONMENT
echo "SEND_GRID_KEY=$send_grid_key" >> .env.$ENVIRONMENT
echo "AWS_S3_BUCKET_NAME=$images_s3_bucket_name" >> .env.$ENVIRONMENT
echo "BASE_JOB_URL=$akpa_base_job_url" >> .env.$ENVIRONMENT
echo "FEATURED_JOBS_URL=$akpa_featured_jobs_url" >> .env.$ENVIRONMENT
echo "STRAPI_BASE_URL=$strapi_base_url" >> .env.$ENVIRONMENT
echo "STRAPI_TOKEN=$strapi_token" >> .env.$ENVIRONMENT
echo "AWS_REGION=$AWS_REGION" >> .env.$ENVIRONMENT
echo "OPENAI_API_KEY=$openai_api_key" >> .env.$ENVIRONMENT

# Strapi env file

echo "DATABASE_CLIENT=postgres" >> .env.strapi.$ENVIRONMENT
echo "DATABASE_NAME=$strapi_db_name" >> .env.strapi.$ENVIRONMENT
echo "DATABASE_HOST=$db_host" >> .env.strapi.$ENVIRONMENT
echo "DATABASE_PORT=5432" >> .env.strapi.$ENVIRONMENT
echo "DATABASE_USERNAME=$db_user" >> .env.strapi.$ENVIRONMENT
echo "DATABASE_PASSWORD=$db_password" >> .env.strapi.$ENVIRONMENT
echo "AWS_BUCKET=$strapi_s3_bucket_name" >> .env.strapi.$ENVIRONMENT
echo "JWT_SECRET=$strapi_jwt_secret" >> .env.strapi.$ENVIRONMENT
echo "ADMIN_JWT_SECRET=$strapi_admin_jwt_secret" >> .env.strapi.$ENVIRONMENT
echo "APP_KEYS=$strapi_app_keys" >> .env.strapi.$ENVIRONMENT
echo "API_TOKEN_SALT=$strapi_api_token_salt" >> .env.strapi.$ENVIRONMENT
echo "TRANSFER_TOKEN_SALT=$strapi_transfer_token_salt" >> .env.strapi.$ENVIRONMENT
