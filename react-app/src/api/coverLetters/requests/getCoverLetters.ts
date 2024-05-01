import makeRequest from 'src/utils/makeRequest';

import { GetCoverLettersResponse } from '../types';

const getCoverLetters = async (): Promise<GetCoverLettersResponse> => {
  const response = await makeRequest<GetCoverLettersResponse>('/cover-letters');

  return response;
};

export default getCoverLetters;
