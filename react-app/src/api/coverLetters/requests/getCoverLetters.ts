import makeRequest from 'src/utils/makeRequest';

import { GetCoverLettersResponse } from '../types';

const getCoverLetters = async (): Promise<GetCoverLettersResponse | undefined> => {
  const response = await makeRequest<GetCoverLettersResponse>('/user/cover-letter');

  return response;
};

export default getCoverLetters;
