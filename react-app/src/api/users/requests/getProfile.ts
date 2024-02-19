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

  return { ...parsedData, role } as User;
};

export default getProfile;
