import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getJob from '../requests/getJob';
import { GetJobRequest } from '../types';

const useGetJob = (req: GetJobRequest) => {
  return useQuery({
    queryKey: [Keys.GET_JOB, req.id],
    queryFn: () => getJob(req),
    refetchOnMount: true,
  });
};

export default useGetJob;
