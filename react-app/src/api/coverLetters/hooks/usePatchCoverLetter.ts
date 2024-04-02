import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import patchCoverLetter from '../requests/patchCoverLetter';

const usePatchCoverLetter = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  return useMutation({
    mutationKey: [Keys.PATCH_COVER_LETTER],
    mutationFn: patchCoverLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_COVER_LETTER] });
      message.success(t('updateSuccessMessage'));
    },
    onError: () => {
      message.error(t('updateErrorMessage'));
    },
  });
};

export default usePatchCoverLetter;
