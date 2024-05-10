import makeRequest from 'src/utils/makeRequest';

import { PostChatbotRequest } from '../types';

export const postChatbot = async (request: PostChatbotRequest): Promise<string> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsedData: any = await makeRequest(
    `/chatbot/assistant`,
    {
      method: 'POST',
      body: JSON.stringify(request),
    },
    true,
    false,
  );

  return parsedData;
};

export default postChatbot;
