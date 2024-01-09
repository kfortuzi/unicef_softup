import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { Route } from 'src/router/enums';
import { LocalStorageKey, deleteItem } from 'src/utils/storage';

const useLogOut = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return {
    logOut: () => {
      deleteItem(LocalStorageKey.USER_SESSION_TOKEN);
      queryClient.removeQueries();
      navigate(`${Route.ACCESS}/${Route.LOGIN}`);
    },
  };
};

export default useLogOut;
