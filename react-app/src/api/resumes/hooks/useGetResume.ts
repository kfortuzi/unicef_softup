import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getResume from '../requests/getResume';

const useGetResume = () => {
  return useQuery({
    queryKey: [Keys.GET_RESUME],
    queryFn: getResume,
    refetchOnMount: false,
  });
};

export default useGetResume;
