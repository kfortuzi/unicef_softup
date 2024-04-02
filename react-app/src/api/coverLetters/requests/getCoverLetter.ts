import makeRequest from 'src/utils/makeRequest';

import { GetCoverLetterRequest, GetCoverLetterResponse } from '../types';

const getCoverLetter = async (req: GetCoverLetterRequest): Promise<GetCoverLetterResponse | undefined> => {
  const response = await makeRequest<GetCoverLetterResponse>(`/cover-letters/${req.id}`);

  return response;
};

export default getCoverLetter;
