import makeRequest from 'src/utils/makeRequest';

import { SignupRequest, SignupResponse, User } from '../types';

const signUp = async (request: SignupRequest): Promise<User> => {
  const parsedData = await makeRequest<SignupResponse>(
    '/user/signup',
    {
      method: 'POST',
      body: JSON.stringify({
        email: request.email,
        password: request.password,
        firstName: request.firstName,
        lastName: request.lastName,
      }),
    },
    false,
  );

  const { id, email, first_name: firstName, last_name: lastName, confirmed_at: confirmedAt } = parsedData;

  return {
    id,
    email,
    firstName,
    lastName,
    confirmedAt,
  };
};

export default signUp;
