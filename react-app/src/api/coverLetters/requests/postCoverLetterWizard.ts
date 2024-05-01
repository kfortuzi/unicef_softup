import makeRequest from 'src/utils/makeRequest';

import { PostCoverLetterWizardRequest, PostCoverLetterWizardResponse } from '../types';

export const postCoverLetterWizard = async (
  request: PostCoverLetterWizardRequest,
): Promise<PostCoverLetterWizardResponse> => {
  const parsedData = await makeRequest<PostCoverLetterWizardResponse>(`/cover-letters/wizard`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postCoverLetterWizard;
