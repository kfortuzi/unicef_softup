import makeRequest from 'src/utils/makeRequest';

import { PostResumeAskWizardRequest, PostResumeAskWizardResponse } from '../types';

export const postResumeAskWizard = async (
  request: PostResumeAskWizardRequest,
): Promise<PostResumeAskWizardResponse> => {
  const parsedData = makeRequest<PostResumeAskWizardResponse>(`/resumes/ask-wizard`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postResumeAskWizard;
