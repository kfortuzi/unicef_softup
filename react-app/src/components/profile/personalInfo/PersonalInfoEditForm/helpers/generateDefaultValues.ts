import { User } from 'src/api/users/types';

import { defaultValues } from '../constants';

export function generateDefaultValues(user: User | undefined): User {
  if (!user) {
    return defaultValues as User;
  }

  return user;
}
