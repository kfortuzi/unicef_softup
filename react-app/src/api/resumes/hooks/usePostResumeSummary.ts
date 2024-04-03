import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import Keys from '../keys';
import postResumeSummary from '../requests/postResumeSummary';

const usePostResumeSummary = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return useMutation({
    mutationKey: [Keys.POST_RESUME_SUMMARY],
    mutationFn: postResumeSummary,
    onError: () => {
      message.error(t('updateErrorMessage'));
    },
  });
};

export default usePostResumeSummary;
