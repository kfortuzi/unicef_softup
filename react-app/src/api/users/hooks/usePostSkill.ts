import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import postSkill from '../requests/postSkill';

const usePostSkill = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.POST_SKILL],
    mutationFn: postSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_SKILLS] });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePostSkill;
