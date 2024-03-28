import makeRequest from 'src/utils/makeRequest';

import { PostCoverLetterForJobRequest, PostCoverLetterForJobResponse } from '../types';

export const postCoverLetterForJob = async (
  request: PostCoverLetterForJobRequest,
): Promise<PostCoverLetterForJobResponse | undefined> => {
  const parsedData = makeRequest<PostCoverLetterForJobResponse>(`/cover-letters/for-job/${request.jobId}`, {
    method: 'POST',
  });

  return parsedData;
};

export default postCoverLetterForJob;
