import { Route } from 'src/router/enums';
import makeRequest from 'src/utils/makeRequest';

import { RequestNewPasswordRequest, RequestNewPasswordResponse } from '../types';

const requestNewPassword = async (
  request: RequestNewPasswordRequest,
): Promise<RequestNewPasswordResponse | undefined> => {
  const resetPasswordUrl = `${window.location.origin}/#${Route.ACCESS}/${Route.RESET_PASSWORD}`;

  const parsedData = await makeRequest<RequestNewPasswordResponse>(
    '/user/send_reset_password',
    {
      method: 'PATCH',
      body: JSON.stringify({
        ...request,
        reset_password_url: resetPasswordUrl,
      }),
    },
    false,
  );

  return parsedData;
};

export default requestNewPassword;
