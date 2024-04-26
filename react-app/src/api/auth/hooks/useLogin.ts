import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import setUserSessionToken from 'src/helpers/setUserSessionToken';
import { Route } from 'src/router/enums';

import Keys from '../keys';
import logIn from '../requests/login';

const useLogIn = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'auth.login' });

  return useMutation({
    mutationKey: [Keys.LOG_IN],
    mutationFn: logIn,
    onSuccess: (data) => {
      if (!data) {
        navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true });
      } else {
        setUserSessionToken(data.access_token);
        navigate(Route.ROOT, { replace: true });
      }
    },
    onError: (error) => {
      let errorMessage = t('failedToLogIn');
      if (error.message === 'Invalid credentials') {
        errorMessage = t('invalidCredentials');
      }
      if (error.message === 'User not confirmed!') {
        errorMessage = t('emailIsNotVerified');
      }
      message.error(errorMessage);
    },
  });
};

export default useLogIn;
