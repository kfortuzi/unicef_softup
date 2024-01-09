import makeRequest from 'src/utils/makeRequest';

import { ConfirmUserRequest, ConfirmUserResponse } from '../types';

const confirmUser = async (request: ConfirmUserRequest): Promise<ConfirmUserResponse | undefined> => {
  if (!request.id || !request.verificationCode) {
    throw new Error('Invalid request');
  }

  const id = request.id;
  const verificationCode = request.verificationCode;
  const queryParams = new URLSearchParams({ id, verificationCode });

  const parsedData = await makeRequest<ConfirmUserResponse>(`/user/confirm?${queryParams}`, undefined, false);

  return parsedData;
};

export default confirmUser;
