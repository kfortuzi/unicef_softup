import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import postCoverLetterForJob from '../requests/postCoverLetterForJob';

const usePostCoverLetterForJob = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.POST_COVER_LETTER_FOR_JOB],
    mutationFn: postCoverLetterForJob,
    onMutate: () => {
      message.loading('Creating cover letter...');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_COVER_LETTERS] });
      message.success('Cover letter has been successfully created');
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePostCoverLetterForJob;
