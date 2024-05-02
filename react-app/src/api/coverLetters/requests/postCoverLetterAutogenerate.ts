import makeRequest from 'src/utils/makeRequest';

import { PostCoverLetterAutogenerateRequest } from '../types';

export const postCoverLetterAutogenerate = async (
  request: PostCoverLetterAutogenerateRequest,
): Promise<string> => {
  const parsedData = await makeRequest<string>(`/cover-letters/autogenerate`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postCoverLetterAutogenerate;
