import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Route } from 'src/router/enums';

import Keys from '../keys';
import requestNewPassword from '../requests/requestNewPassword';

const useRequestNewPassword = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'auth.resetPassword' });

  return useMutation({
    mutationKey: [Keys.REQUEST_NEW_PASSWORD],
    mutationFn: requestNewPassword,
    onSuccess: () => {
      message.success(t('passwordResetEmailSent'));
      navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true });
    },
    onError: (error) => {
      let errorMessage = t('failedToRequestNewPassword');
      if (error.message === 'User does not exists!') {
        errorMessage = t('userDoesNotExist');
      }
      message.error(errorMessage);
    },
  });
};

export default useRequestNewPassword;
