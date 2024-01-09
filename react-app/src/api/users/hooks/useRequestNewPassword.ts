import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Route } from 'src/router/enums';

import Keys from '../keys';
import requestNewPassword from '../requests/requestNewPassword';

const useRequestNewPassword = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [Keys.REQUEST_NEW_PASSWORD],
    mutationFn: requestNewPassword,
    onSuccess: () => {
      message.success('The request for a new password has been successfully sent!');
      navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default useRequestNewPassword;
