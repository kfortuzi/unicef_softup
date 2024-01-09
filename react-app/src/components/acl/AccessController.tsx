import { Action, Entity } from './enums';
import useAllowAccess from './hooks/useAllowAccess';

interface Props {
  requestedEntity: Entity;
  requestedActions: Action[];
  children: React.ReactNode;
}

const AccessController: React.FC<Props> = ({ requestedEntity, requestedActions, children }) => {
  const hasPermission = useAllowAccess(requestedEntity, requestedActions);

  if (!hasPermission) {
    return null;
  }

  return <>{children}</>;
};

export default AccessController;
