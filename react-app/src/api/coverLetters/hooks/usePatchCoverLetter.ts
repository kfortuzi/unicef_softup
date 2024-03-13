import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import patchCoverLetter from '../requests/patchCoverLetter';

const usePatchCoverLetter = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.PATCH_COVER_LETTER],
    mutationFn: patchCoverLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_COVER_LETTER] });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePatchCoverLetter;
