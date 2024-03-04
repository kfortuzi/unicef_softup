import makeRequest from 'src/utils/makeRequest';

import { GetResumeResponse } from '../types';

const getResume = async (): Promise<GetResumeResponse | undefined> => {
  const response = await makeRequest<GetResumeResponse>('/user/resume');

  return response;
};

export default getResume;
