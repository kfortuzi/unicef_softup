import { useQuery } from '@tanstack/react-query';

import { LocalStorageKey, getItem } from 'src/utils/storage';

import Keys from '../keys';
import getProfile from '../requests/getProfile';

const useGetProfile = () => {
  const accessToken = getItem<string>(LocalStorageKey.USER_SESSION_TOKEN);

  return useQuery({
    queryKey: [Keys.GET_PROFILE],
    queryFn: getProfile,
    refetchOnMount: false,
    enabled: !!accessToken,
  });
};

export default useGetProfile;
