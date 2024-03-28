import makeRequest from 'src/utils/makeRequest';

import { GetJobRequests, GetJobsResponse } from '../types';

const getJobs = async (request: GetJobRequests): Promise<GetJobsResponse | undefined> => {
  const response = await makeRequest<GetJobsResponse>(`/jobs?take=${request.take}&cursor=${request.cursor}`);

  return response;
};

export default getJobs;
