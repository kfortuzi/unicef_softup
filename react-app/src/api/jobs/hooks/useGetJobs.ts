import { useInfiniteQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getJobs from '../requests/getJobs';
import { GetJobsRequest } from '../types';

const useGetJobs = (request: GetJobsRequest) => {
  return useInfiniteQuery({
    queryKey: [Keys.GET_JOBS],
    queryFn: ({ pageParam }) => getJobs({ take: request.take, cursor: pageParam }),
    initialPageParam: '',
    getNextPageParam: (lastPage) => lastPage?.slice(-1)[0].id ?? undefined,
  });
};

export default useGetJobs;
