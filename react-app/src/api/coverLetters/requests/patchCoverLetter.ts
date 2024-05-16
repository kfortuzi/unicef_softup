import makeRequest from 'src/utils/makeRequest';

import { PatchCoverLetterRequest, PatchCoverLetterResponse } from '../types';

export const patchCoverLetter = async ({
  id,
  ...request
}: PatchCoverLetterRequest): Promise<PatchCoverLetterResponse> => {
  const parsedData = makeRequest<PatchCoverLetterResponse>(`/cover-letters/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default patchCoverLetter;
