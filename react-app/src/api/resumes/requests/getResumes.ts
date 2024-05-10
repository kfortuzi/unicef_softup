import makeRequest from 'src/utils/makeRequest';

import { GetResumesResponse } from '../types';
import { orderByDate } from '../utils';

const getResumes = async (): Promise<GetResumesResponse> => {
  const response = await makeRequest<GetResumesResponse>('/resumes');

  response.forEach((resume) => {
    orderByDate(resume);
  });

  return response;
};

export default getResumes;
