import { Action, Entity } from 'src/components/acl/enums';

import { Route } from './enums';

export const routeEntities = {
  [Route.ARTICLES]: Entity.ARTICLES,
};

export const routeActions = {
  [Entity.ARTICLES]: [Action.READ, Action.READ_OWN],
};
