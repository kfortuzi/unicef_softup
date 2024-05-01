import makeRequest from 'src/utils/makeRequest';

import { ResetPasswordRequest, ResetPasswordResponse } from '../types';

const resetPassword = async (request: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  const queryParams = new URLSearchParams({ verificationCode: request.verificationCode });

  const parsedData = await makeRequest<ResetPasswordResponse>(
    `/user/${request.id}?${queryParams}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ password: request.newPassword }),
    },
    false,
  );

  return parsedData;
};

export default resetPassword;
