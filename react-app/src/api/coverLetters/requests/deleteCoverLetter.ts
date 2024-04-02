import makeRequest from 'src/utils/makeRequest';

import { DeleteCoverLetterRequest } from '../types';

export const deleteCoverLetter = async (request: DeleteCoverLetterRequest) => {
  return makeRequest(`/cover-letters/${request.id}`, {
    method: 'DELETE',
  });
};

export default deleteCoverLetter;
