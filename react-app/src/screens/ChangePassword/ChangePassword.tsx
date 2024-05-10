import React from 'react';

import ChangeResetPasswordForm from 'src/components/profile/changePassword/ChangePasswordForm';

const ChangePassword: React.FC = () => {
  return (
    <div className="change-password-container profile-page-content">
      <ChangeResetPasswordForm />
    </div>
  );
};

export default ChangePassword;
