import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getJobs from '../requests/getJobs';

const useGetJobs = () => {
  return useQuery({
    queryKey: [Keys.GET_JOBS],
    queryFn: getJobs,
    refetchOnMount: false,
  });
};

export default useGetJobs;
