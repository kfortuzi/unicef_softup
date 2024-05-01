import makeRequest from 'src/utils/makeRequest';

import { PostChatbotRequest } from '../types';

export const postChatbot = async (request: PostChatbotRequest): Promise<string> => {
  const parsedData = await makeRequest<{ message: string }>(`/chatbot/assistant`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData.message;
};

export default postChatbot;
