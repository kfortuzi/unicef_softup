import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import confirmUser from '../requests/confirmUser';
import { ConfirmUserRequest } from '../types';

const useConfirmUser = (params: ConfirmUserRequest) =>
  useQuery({
    queryKey: [Keys.CONFIRM_USER],
    queryFn: () => confirmUser(params),
    enabled: !!params,
    refetchOnMount: false,
    retry: false,
  });

export default useConfirmUser;
