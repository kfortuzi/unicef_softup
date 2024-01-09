import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Route } from 'src/router/enums';

import Keys from '../keys';
import resetPassword from '../requests/resetPassword';

const useResetPassword = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: [Keys.RESET_PASSWORD],
    mutationFn: resetPassword,
    onSuccess: () => {
      message.success('Your password has been successfully reset!');
      navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default useResetPassword;
