import makeRequest from 'src/utils/makeRequest';

import { DeleteResumeRequest } from '../types';

export const deleteResume = async (request: DeleteResumeRequest) => {
  return makeRequest(`/resumes/${request.id}`, {
    method: 'DELETE',
  });
};

export default deleteResume;
