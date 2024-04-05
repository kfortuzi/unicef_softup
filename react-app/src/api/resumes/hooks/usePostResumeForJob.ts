import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import postResumeForJob from '../requests/postResumeForJob';

const usePostResumeForJob = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return useMutation({
    mutationKey: [Keys.POST_RESUME_FOR_JOB],
    mutationFn: postResumeForJob,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_RESUMES] });
      message.success(t('createSuccessMessage'));
    },
    onError: () => {
      message.error(t('createErrorMessage'));
    },
  });
};

export default usePostResumeForJob;
