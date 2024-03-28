import makeRequest from 'src/utils/makeRequest';

import { GetJobRequest, GetJobResponse } from '../types';

const getJob = async (req: GetJobRequest): Promise<GetJobResponse | undefined> => {
  const { id } = req;

  const response = await makeRequest<GetJobResponse>(`/jobs/${id}`);

  return response;
};

export default getJob;
