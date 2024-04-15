import makeRequest from 'src/utils/makeRequest';

import { RequestNewPasswordRequest, RequestNewPasswordResponse } from '../types';

const requestNewPassword = async (
  request: RequestNewPasswordRequest,
): Promise<RequestNewPasswordResponse | undefined> => {
  const parsedData = await makeRequest<RequestNewPasswordResponse>(
    '/user/send-reset-password',
    {
      method: 'PATCH',
      body: JSON.stringify(request),
    },
    false,
  );

  return parsedData;
};

export default requestNewPassword;
