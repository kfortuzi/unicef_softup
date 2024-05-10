import makeRequest from 'src/utils/makeRequest';

import { ResetPasswordRequest, ResetPasswordResponse } from '../types';

const resetPassword = async (request: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
  const parsedData = await makeRequest<ResetPasswordResponse>(
    `/user/reset-password`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        userId: request.id,
        verificationCode: request.verificationCode,
        password: request.newPassword,
      }),
    },
    false,
  );

  return parsedData;
};

export default resetPassword;
