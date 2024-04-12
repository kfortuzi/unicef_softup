import { useMutation } from '@tanstack/react-query';
import { App } from 'antd';

import Keys from '../keys';
import postChatbot from '../requests/postChatbot';

const usePostChatbot = () => {
  const { message } = App.useApp();

  return useMutation({
    mutationKey: [Keys.POST_CHATBOT],
    mutationFn: postChatbot,
    onError: (error) => {
      message.error(error.message);
    },
  });
};

export default usePostChatbot;
