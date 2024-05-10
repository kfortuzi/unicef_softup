import makeRequest from 'src/utils/makeRequest';

import { GetResumeRequest, GetResumeResponse } from '../types';
import { orderByDate } from '../utils';

const getResume = async (request: GetResumeRequest): Promise<GetResumeResponse> => {
  const response = await makeRequest<GetResumeResponse>(`/resumes/${request.id}`);

  return orderByDate(response);
};

export default getResume;
