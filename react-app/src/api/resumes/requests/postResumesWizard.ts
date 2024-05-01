import makeRequest from 'src/utils/makeRequest';

import { PostResumesWizardRequest, PostResumesWizardResponse } from '../types';

export const postResumesWizard = async (
  request: PostResumesWizardRequest,
): Promise<PostResumesWizardResponse> => {
  const parsedData = makeRequest<PostResumesWizardResponse>(`/resumes/wizard`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postResumesWizard;
