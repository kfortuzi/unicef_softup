import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';

import Keys from '../keys';
import signUp from '../requests/signUp';

const useSignUp = () => {
  const { message } = App.useApp();
  const { t } = useTranslation('translation', { keyPrefix: 'auth.signUp' });

  return useMutation({
    mutationKey: [Keys.SIGN_UP],
    mutationFn: signUp,
    onError: (error) => {
      let errorMessage = t('failedToSignUp');
      if (error.message === 'User already exists!') {
        errorMessage = t('userAlreadyExists');
      }
      message.error(errorMessage);
    },
  });
};

export default useSignUp;
