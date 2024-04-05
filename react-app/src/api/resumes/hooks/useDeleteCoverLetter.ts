import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import deleteResume from '../requests/deleteResume';

const useDeleteResume = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });

  return useMutation({
    mutationKey: [Keys.DELETE_RESUME],
    mutationFn: deleteResume,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_RESUMES] });
      message.success(t('deleteSuccessMessage'));
    },
    onError: () => {
      message.error(t('deleteErrorMessage'));
    },
  });
};

export default useDeleteResume;
