import makeRequest from 'src/utils/makeRequest';

import { GetResumesResponse } from '../types';

const getResumes = async (): Promise<GetResumesResponse | undefined> => {
  const response = await makeRequest<GetResumesResponse>('/resumes');

  return response;
};

export default getResumes;
