import { LoginRequest, LoginResponse } from 'src/api/auth/types';
import makeRequest from 'src/utils/makeRequest';

const logIn = async (request: LoginRequest): Promise<LoginResponse | undefined> => {
  const parsedData = await makeRequest<LoginResponse>(
    '/auth/login',
    {
      method: 'POST',
      body: JSON.stringify(request),
    },
    false,
  );

  return parsedData;
};

export default logIn;
