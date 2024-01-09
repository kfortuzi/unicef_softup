import useGetProfile from 'src/api/users/hooks/useGetProfile';

import { Action, Entity } from '../enums';
import allowAccess from '../helpers/allowAccess';

const useAllowAccess = (requestedEntity: Entity, requestedActions: Action[]) => {
  const { data: user } = useGetProfile();

  return allowAccess(user?.role, requestedEntity, requestedActions);
};

export default useAllowAccess;
