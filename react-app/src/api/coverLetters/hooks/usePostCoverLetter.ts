import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import queryClient from 'src/clients/reactQuery';

import Keys from '../keys';
import postCoverLetter from '../requests/postCoverLetter';
import { BaseResponse, PostCoverLetterRequest } from '../types';

const usePostCoverLetter = () => {
  const { message } = App.useApp();
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  return useMutation<BaseResponse, Error, PostCoverLetterRequest>({
    mutationKey: [Keys.POST_COVER_LETTER],
    mutationFn: postCoverLetter,
    onSuccess: ({ id }) => {
      queryClient.invalidateQueries({ queryKey: [Keys.GET_COVER_LETTERS] });
      navigate(`/cover-letters/${id}`);
      message.success(t('createSuccessMessage'));
    },
    onError: () => {
      message.error(t('createErrorMessage'));
    },
  });
};

export default usePostCoverLetter;
