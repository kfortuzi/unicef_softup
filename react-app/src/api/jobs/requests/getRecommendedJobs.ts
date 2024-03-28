import makeRequest from 'src/utils/makeRequest';

import { GetRecommendedJobsResponse } from '../types';

const getRecommendedJobs = async (): Promise<GetRecommendedJobsResponse | undefined> => {
  const response = await makeRequest<GetRecommendedJobsResponse>(`/jobs/user-recommended-jobs`);

  return response;
};

export default getRecommendedJobs;
