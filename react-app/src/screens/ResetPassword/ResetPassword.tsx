import { Typography } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import ResetPasswordForm from 'src/components/auth/resetPassword/ResetPasswordForm/ResetPasswordForm';
import { Route } from 'src/router/enums';

const ResetPassword: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.resetPassword' });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const verificationCode = searchParams.get('verificationCode');

  useEffect(() => {
    if (!id || !verificationCode) {
      navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true });
    }
  }, [id, navigate, verificationCode]);

  if (!id || !verificationCode) {
    return null;
  }

  return (
    <div className="reset-password-container">
      <Typography.Title>{t('header')}</Typography.Title>
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
      <ResetPasswordForm
        id={id}
        verificationCode={verificationCode}
      />
    </div>
  );
};

export default ResetPassword;
