import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import Keys from '../keys';
import postResumeAskWizard from '../requests/postResumeAskWizard';

const usePostResumeAskWizard = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return useMutation({
    mutationKey: [Keys.POST_RESUME_ASK_WIZARD],
    mutationFn: postResumeAskWizard,
    onError: () => {
      message.error(t('updateErrorMessage'));
    },
  });
};

export default usePostResumeAskWizard;
