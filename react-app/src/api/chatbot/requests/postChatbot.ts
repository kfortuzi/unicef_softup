import makeRequest from 'src/utils/makeRequest';

import { PostChatbotRequest } from '../types';

export const postChatbot = async (
  request: PostChatbotRequest,
): Promise<string | undefined> => {
  const parsedData = await makeRequest<string>(`/chatbot`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postChatbot;
