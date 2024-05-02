import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import Keys from '../keys';
import postCoverLetterAutogenerate from '../requests/postCoverLetterAutogenerate';

const usePostCoverLetterAutogenerate = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.POST_COVER_LETTER_AUTOGENERATE],
    mutationFn: postCoverLetterAutogenerate,
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePostCoverLetterAutogenerate;
