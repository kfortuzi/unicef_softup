function check_environment_var {
    if [[ $ENVIRONMENT != "dev" && $ENVIRONMENT != "prod" ]]; then
        echo "Environment doesn't have proper value"
        exit 1
    fi
}
