import makeRequest from 'src/utils/makeRequest';

import { GetResumeRequest, GetResumeResponse } from '../types';

const getResume = async (request: GetResumeRequest): Promise<GetResumeResponse> => {
  const response = await makeRequest<GetResumeResponse>(`/resumes/${request.id}`);

  return response;
};

export default getResume;
