import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import Keys from '../keys';
import postRequestVerification from '../requests/requestVerification';

const useUserRequestVerification = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'auth.resetPassword' });

  return useMutation({
    mutationKey: [Keys.REQUEST_VERIFICATION],
    mutationFn: postRequestVerification,
    onError: (error) => {
      let errorMessage = t('failedToRequestNewPassword');
      if (error.message === 'User not found!') {
        errorMessage = t('userDoesNotExist');
      }
      if (error.message === 'Invalid or expired reset code.') {
        errorMessage = t('invalidOrExpiredResetCode');
      }

      message.error(errorMessage);
    },
  });
};

export default useUserRequestVerification;
