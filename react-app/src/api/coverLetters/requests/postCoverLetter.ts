import makeRequest from 'src/utils/makeRequest';

import { BaseResponse, PostCoverLetterRequest } from '../types';

export const postCoverLetter = async (body: PostCoverLetterRequest): Promise<BaseResponse> => {
  const parsedData = makeRequest<BaseResponse>(`/cover-letters`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  return parsedData;
};

export default postCoverLetter;
