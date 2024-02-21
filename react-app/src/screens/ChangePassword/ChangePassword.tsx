import { t } from 'i18next';
import React from 'react';

import ChangeResetPasswordForm from 'src/components/profile/changePassword/ChangePasswordForm';

const ChangePassword: React.FC = () => {
  return (
    <div className="change-password-container">
      <h1 style={{ alignSelf: 'center' }}>{t('profile.changePassword.header')}</h1>
      <ChangeResetPasswordForm />
    </div>
  );
};

export default ChangePassword;
