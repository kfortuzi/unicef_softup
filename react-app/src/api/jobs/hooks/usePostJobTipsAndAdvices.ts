import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import Keys from '../keys';
import postJobTipsAndAdvices from '../requests/postJobTipsAndAdvices';

const usePostJobTipsAndAdvices = (id?: string) => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });

  return useMutation({
    mutationKey: [Keys.POST_JOB_TIPS_AND_ADVICES, id],
    mutationFn: postJobTipsAndAdvices,
    onError: () => {
      message.error(t('fetchTipsAndAdvicesErrorMessage'));
    },
  });
};

export default usePostJobTipsAndAdvices;
