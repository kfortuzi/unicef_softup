import { Route } from 'src/router/enums';
import makeRequest from 'src/utils/makeRequest';

import { SignupRequest, SignupResponse, User } from '../types';

const signUp = async (request: SignupRequest): Promise<User | undefined> => {
  const confirmUserUrl = `${window.location.origin}/#${Route.ACCESS}/${Route.CONFIRM_USER}`;

  const parsedData = await makeRequest<SignupResponse>(
    '/user/signup',
    {
      method: 'POST',
      body: JSON.stringify({
        email: request.email,
        password: request.password,
        // TODO: Remove, not needed
        confirm_user_url: confirmUserUrl,
      }),
    },
    false,
  );

  if (parsedData) {
    const {
      id,
      email,
      first_name: firstName,
      last_name: lastName,
      confirmed_at: confirmedAt,
    } = parsedData;

    return {
      id,
      email,
      firstName,
      lastName,
      confirmedAt,
    };
  }
};

export default signUp;
