import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import patchUser from '../requests/patchUser';

const usePatchUser = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });

  return useMutation({
    mutationKey: [Keys.PATCH_USER],
    mutationFn: patchUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_PROFILE] });
    },
    onError: (error) => {
      if (error.message === 'phoneNumber must be a valid phone number') {
        message.error(t('phoneNumberValidation'));
      } else {
        message.error(error.message);
      }
    },
  });
};

export default usePatchUser;
