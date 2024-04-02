import makeRequest from 'src/utils/makeRequest';

import { PostCoverLetterAskWizardRequest } from '../types';

export const postCoverLetterAskWizard = async (
  request: PostCoverLetterAskWizardRequest,
): Promise<string | undefined> => {
  const parsedData = await makeRequest<string>(`/cover-letters/ask-wizard`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postCoverLetterAskWizard;
