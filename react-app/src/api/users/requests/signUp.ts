import { Route } from 'src/router/enums';
import makeRequest from 'src/utils/makeRequest';

import { SignupRequest, SignupResponse, User } from '../types';

const signUp = async (request: SignupRequest): Promise<User | undefined> => {
  const confirmUserUrl = `${window.location.origin}/#${Route.ACCESS}/${Route.CONFIRM_USER}`;
  const username = `${request.firstName.toLowerCase()}.${request.lastName.toLowerCase()}`;

  const parsedData = await makeRequest<SignupResponse>(
    '/user/signup',
    {
      method: 'POST',
      body: JSON.stringify({
        email: request.email,
        username,
        first_name: request.firstName,
        last_name: request.lastName,
        password: request.password,
        confirm_user_url: confirmUserUrl,
      }),
    },
    false,
  );

  if (parsedData) {
    const {
      id,
      email,
      username: parsedUsername,
      first_name: firstName,
      last_name: lastName,
      confirmed_at: confirmedAt,
    } = parsedData;

    return {
      id,
      email,
      username: parsedUsername,
      firstName,
      lastName,
      confirmedAt,
    };
  }
};

export default signUp;
