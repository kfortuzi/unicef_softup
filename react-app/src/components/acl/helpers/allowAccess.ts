import { User } from 'src/api/users/types';

import { Action, Entity } from '../enums';

const allowAccess = (
  userRole: User['role'] | undefined,
  requestedEntity: Entity,
  requestedActions: Action[],
) => {
  if (!userRole) {
    return false;
  }

  const allowedActionsForRequestedEntity = userRole?.entities[requestedEntity];

  const allActionsAllowedForRequestedEntity = !requestedActions?.some(
    (action) => !allowedActionsForRequestedEntity?.includes(action),
  );

  return allActionsAllowedForRequestedEntity;
};

export default allowAccess;
