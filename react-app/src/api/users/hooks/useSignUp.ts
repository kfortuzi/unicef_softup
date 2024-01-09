import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import Keys from '../keys';
import signUp from '../requests/signUp';

const useSignUp = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.SIGN_UP],
    mutationFn: signUp,
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default useSignUp;
