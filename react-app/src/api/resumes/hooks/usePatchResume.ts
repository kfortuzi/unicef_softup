import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import patchResume from '../requests/patchResume';

const usePatchResume = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return useMutation({
    mutationKey: [Keys.PATCH_RESUME],
    mutationFn: patchResume,
    onSuccess: () => {
      message.success(t('updateSuccessMessage'));
      queryClient.invalidateQueries({ queryKey: [Keys.GET_RESUMES] });
      queryClient.invalidateQueries({ queryKey: [Keys.GET_RESUME] });
    },
    onError: () => {
      message.error(t('updateErrorMessage'));
    },
  });
};

export default usePatchResume;
