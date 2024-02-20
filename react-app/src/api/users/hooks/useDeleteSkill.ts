import { useMutation } from '@tanstack/react-query';
import { message } from 'antd';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import deleteSkill from '../requests/deleteSkill';

const useDeleteSkill = () => {
  return useMutation({
    mutationKey: [Keys.DELETE_SKILL],
    mutationFn: deleteSkill,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_SKILLS] });
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default useDeleteSkill;
