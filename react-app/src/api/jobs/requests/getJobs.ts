import makeRequest from 'src/utils/makeRequest';

import { GetJobsRequest, GetJobsResponse } from '../types';

const getJobs = async (request: GetJobsRequest): Promise<GetJobsResponse> => {
  const response = await makeRequest<GetJobsResponse>(
    `/jobs?take=${request.take}&cursor=${request.cursor}&filter=${request.filter}`,
  );

  return response;
};

export default getJobs;
