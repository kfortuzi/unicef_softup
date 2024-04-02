import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import postCoverLetterWizard from '../requests/postCoverLetterWizard';

const usePostCoverLetterWizard = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  return useMutation({
    mutationKey: [Keys.POST_COVER_LETTER_WIZARD],
    mutationFn: postCoverLetterWizard,

    onSuccess: () => {
      message.success(t('createSuccessMessage'));
      queryClient.invalidateQueries({ queryKey: [Keys.GET_COVER_LETTERS] });
    },
    onError: () => {
      message.error(t('createErrorMessage'));
    },
  });
};

export default usePostCoverLetterWizard;
