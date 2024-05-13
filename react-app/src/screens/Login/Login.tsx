import { Alert, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import LoginForm from 'src/components/auth/login/LoginForm/LoginForm';

const Login: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.login' });

  return (
    <div className="login-container">
      <Typography.Title className="header">{t('header')}</Typography.Title>
      <LoginForm />
      <Alert
        className="disclaimer"
        message={<span className="title">{t('disclaimerHeader')}</span>}
        description={t('disclaimerMessage')}
        type="warning"
        showIcon
      />
    </div>
  );
};

export default Login;
