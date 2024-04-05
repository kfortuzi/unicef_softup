import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import Keys from '../keys';
import postResumesWizard from '../requests/postResumesWizard';

const usePostResumesWizard = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return useMutation({
    mutationKey: [Keys.POST_RESUMES_WIZARD],
    mutationFn: postResumesWizard,
    onError: () => {
      message.error(t('updateErrorMessage'));
    },
  });
};

export default usePostResumesWizard;
