import { Action, Entity } from 'src/components/acl/enums';

import { Route } from './enums';

export const routeEntities = {
  [Route.JOBS]: Entity.JOBS,
};

export const routeActions = {
  [Entity.JOBS]: [Action.READ, Action.READ_OWN],
};
