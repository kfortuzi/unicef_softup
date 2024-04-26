import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Route } from 'src/router/enums';

import Keys from '../keys';
import resetPassword from '../requests/resetPassword';

const useResetPassword = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'auth.resetPassword' });

  return useMutation({
    mutationKey: [Keys.RESET_PASSWORD],
    mutationFn: resetPassword,
    onSuccess: () => {
      message.success(t('requestSuccess'));
      navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true });
    },
    onError: (error) => {
      let errorMessage = t('failedToRequestNewPassword');
      if (error.message === 'User not found!') {
        errorMessage = t('userDoesNotExist');
      }

      message.error(errorMessage);
    },
  });
};

export default useResetPassword;
