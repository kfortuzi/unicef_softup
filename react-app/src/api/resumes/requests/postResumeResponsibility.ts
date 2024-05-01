import makeRequest from 'src/utils/makeRequest';

import { PostResumeResponsibilityRequest, PostResumeResponsibilityResponse } from '../types';

export const postResumeResponsibility = async (
  request: PostResumeResponsibilityRequest,
): Promise<PostResumeResponsibilityResponse> => {
  const parsedData = makeRequest<PostResumeResponsibilityResponse>(`/resumes/responsibility`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postResumeResponsibility;
