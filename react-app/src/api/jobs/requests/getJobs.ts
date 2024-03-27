import makeRequest from 'src/utils/makeRequest';

import { GetJobsResponse } from '../types';

const getCoverLetters = async (): Promise<GetJobsResponse | undefined> => {
  const response = await makeRequest<GetJobsResponse>('/jobs');

  return response;
};

export default getCoverLetters;
