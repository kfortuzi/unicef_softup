import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import patchUser from '../requests/patchUser';

const usePatchUser = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.PATCH_USER],
    mutationFn: patchUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_PROFILE] });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePatchUser;
