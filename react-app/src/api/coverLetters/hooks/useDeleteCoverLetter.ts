import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import deleteCoverLetter from '../requests/deleteCoverLetter';

const useDeleteCoverLetter = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  return useMutation({
    mutationKey: [Keys.DELETE_COVER_LETTER],
    mutationFn: deleteCoverLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_COVER_LETTERS] });
      message.success(t('deleteSuccessMessage'));
    },
    onError: () => {
      message.error(t('deleteErrorMessage'));
    },
  });
};

export default useDeleteCoverLetter;
