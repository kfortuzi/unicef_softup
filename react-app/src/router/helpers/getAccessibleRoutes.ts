import { User } from 'src/api/users/types';
import { Entity } from 'src/components/acl/enums';
import allowAccess from 'src/components/acl/helpers/allowAccess';

import { routeActions } from '../constants';

type AccessibleRoutes = {
  [key in Entity]: boolean;
};

const getAccessibleRoutes = (userRole: User['role']): AccessibleRoutes => {
  const accessibleRoutes: AccessibleRoutes = {
    [Entity.JOBS]: false,
  };

  Object.keys(accessibleRoutes).forEach((entity) => {
    const entityKey = entity as Entity;

    accessibleRoutes[entityKey] = allowAccess(userRole, entityKey, routeActions[entityKey]);
  });

  return accessibleRoutes;
};

export default getAccessibleRoutes;
