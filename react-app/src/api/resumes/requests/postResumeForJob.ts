import makeRequest from 'src/utils/makeRequest';

import { PostResumeForJobRequest, PostResumeForJobResponse } from '../types';

export const postResumeForJob = async (
  request: PostResumeForJobRequest,
): Promise<PostResumeForJobResponse | undefined> => {
  const parsedData = makeRequest<PostResumeForJobResponse>(`/resumes/for-job/${request.jobId}`, {
    method: 'POST',
  });

  return parsedData;
};

export default postResumeForJob;
