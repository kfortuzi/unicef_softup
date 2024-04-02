import makeRequest from 'src/utils/makeRequest';

import { PatchCoverLetterRequest, PatchCoverLetterResponse } from '../types';

export const patchCoverLetter = async (
  request: PatchCoverLetterRequest,
): Promise<PatchCoverLetterResponse | undefined> => {
  const parsedData = makeRequest<PatchCoverLetterResponse>(`/cover-letters/${request.id}`, {
    method: 'PATCH',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default patchCoverLetter;
