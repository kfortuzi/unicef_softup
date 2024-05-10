import makeRequestStream from 'src/utils/makeRequestStream';

import { PostChatbotRequest } from '../types';

export const postChatbot = async (request: PostChatbotRequest): Promise<string> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const parsedData: any = await makeRequestStream(`/chatbot/assistant`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postChatbot;
