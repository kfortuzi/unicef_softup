import makeRequest from 'src/utils/makeRequest';

import { PatchResumeRequest, PatchResumeResponse } from '../types';

export const patchResume = async (request: PatchResumeRequest): Promise<PatchResumeResponse> => {
  const parsedData = makeRequest<PatchResumeResponse>(`/resumes/${request.id}`, {
    method: 'PATCH',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default patchResume;
