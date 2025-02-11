import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import postCoverLetterForJob from '../requests/postCoverLetterForJob';

const usePostCoverLetterForJob = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  return useMutation({
    mutationKey: [Keys.POST_COVER_LETTER_FOR_JOB],
    mutationFn: postCoverLetterForJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_COVER_LETTERS] });
      message.success(t('createSuccessMessage'));
    },
    onError: () => {
      message.error(t('createErrorMessage'));
    },
  });
};

export default usePostCoverLetterForJob;
