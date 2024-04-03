import makeRequest from 'src/utils/makeRequest';

import { PostResumeSummaryRequest, PostResumeSummaryResponse } from '../types';

export const postResumeSummary = async (
  request: PostResumeSummaryRequest,
): Promise<PostResumeSummaryResponse | undefined> => {
  const parsedData = makeRequest<PostResumeSummaryResponse>(`/resumes/summary`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postResumeSummary;
