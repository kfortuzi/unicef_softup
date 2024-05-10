import { Typography } from 'antd';
import { t } from 'i18next';
import React from 'react';

import ChangeResetPasswordForm from 'src/components/profile/changePassword/ChangePasswordForm';

const ChangePassword: React.FC = () => {
  return (
    <div className="change-password-container">
      <Typography.Title className='title'>{t('profile.changePassword.header')}</Typography.Title>
      <ChangeResetPasswordForm />
    </div>
  );
};

export default ChangePassword;
