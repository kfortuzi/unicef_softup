import makeRequest from 'src/utils/makeRequest';

import { PatchUserRequest, PatchUserResponse } from '../types';

const patchUser = async (request: PatchUserRequest): Promise<PatchUserResponse> => {
  const parsedData = await makeRequest<PatchUserResponse>('/user', {
    method: 'PATCH',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default patchUser;
