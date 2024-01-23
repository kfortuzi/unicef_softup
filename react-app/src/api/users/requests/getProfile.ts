import makeRequest from 'src/utils/makeRequest';

import { GetProfileResponse, Role, User } from '../types';

const getProfile = async (): Promise<User | undefined> => {
  const parsedData = await makeRequest<GetProfileResponse>('/user/profile');

  // TODO: use role from response
  const role: Role = {
    role: 'user',
    entities: {
      articles: ['read', 'readOwn'],
    },
  };

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
      role,
    };
  }
};

export default getProfile;
