import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import patchResume from '../requests/patchResume';

const usePatchResume = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.PATCH_RESUME],
    mutationFn: patchResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_RESUME] });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePatchResume;
