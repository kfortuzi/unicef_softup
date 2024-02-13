import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ForgotPasswordForm from 'src/components/auth/forgotPassword/ForgotPasswordForm/ForgotPasswordForm';

const ForgotPassword: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.forgotPassword' });

  return (
    <div className="forgot-password-container">
      <Typography.Title className="header">{t('header')}</Typography.Title>
      <Typography.Paragraph
        type="secondary"
        style={{
          marginBottom: 24,
          maxWidth: 450,
          textAlign: 'center',
        }}
      >
        {t('subHeader')}
      </Typography.Paragraph>
      <ForgotPasswordForm />
    </div>
  );
};

export default ForgotPassword;
