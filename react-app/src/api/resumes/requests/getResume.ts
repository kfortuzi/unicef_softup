import makeRequest from 'src/utils/makeRequest';

import { GetResumeResponse } from '../types';

const getResume = async (): Promise<GetResumeResponse | undefined> => {
  const response = await makeRequest<GetResumeResponse>('/resumes');

  return response;
};

export default getResume;
