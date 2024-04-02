import makeRequest from 'src/utils/makeRequest';

import { GetCoverLettersResponse } from '../types';

const getCoverLetters = async (): Promise<GetCoverLettersResponse | undefined> => {
  const response = await makeRequest<GetCoverLettersResponse>('/cover-letters');

  return response;
};

export default getCoverLetters;
