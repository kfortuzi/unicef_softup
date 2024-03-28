import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getJobs from '../requests/getJobs';
import { GetJobRequests } from '../types';

const useGetJobs = (request: GetJobRequests) => {
  return useQuery({
    queryKey: [Keys.GET_JOBS, request],
    queryFn: () => getJobs(request),
    refetchOnMount: false,
  });
};

export default useGetJobs;
