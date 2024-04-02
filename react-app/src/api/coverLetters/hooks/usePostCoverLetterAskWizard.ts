import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import Keys from '../keys';
import postCoverLetterAskWizard from '../requests/postCoverLetterAskWizard';

const usePostCoverLetterAskWizard = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.POST_COVER_LETTER_ASK_WIZARD],
    mutationFn: postCoverLetterAskWizard,
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePostCoverLetterAskWizard;
