import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import Keys from '../keys';
import postRequestVerification from '../requests/requestVerification';

const useUserRequestVerification = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.REQUEST_VERIFICATION],
    mutationFn: postRequestVerification,
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default useUserRequestVerification;
