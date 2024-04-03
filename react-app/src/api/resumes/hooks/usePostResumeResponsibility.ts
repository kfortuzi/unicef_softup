import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import Keys from '../keys';
import postResumeResponsibility from '../requests/postResumeResponsibility';

const usePostResumeResponsibility = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return useMutation({
    mutationKey: [Keys.POST_RESUME_RESPONSIBILITY],
    mutationFn: postResumeResponsibility,
    onError: () => {
      message.error(t('updateErrorMessage'));
    },
  });
};

export default usePostResumeResponsibility;
