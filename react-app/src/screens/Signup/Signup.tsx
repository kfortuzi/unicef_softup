import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import SignupForm from 'src/components/auth/signup/SignupForm/SignupForm';

const Signup: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.signUp' });

  return (
    <div className="signup-container">
      <div className="signup-centered-content-wrapper">
        <Typography.Title className="header">{t('header')}</Typography.Title>
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
