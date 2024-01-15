import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useNavigate } from 'react-router-dom';

import setUserSessionToken from 'src/helpers/setUserSessionToken';
import { Route } from 'src/router/enums';

import Keys from '../keys';
import logIn from '../requests/login';

const useLogIn = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();

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
      message.error(error.message);
    },
  });
};

export default useLogIn;
