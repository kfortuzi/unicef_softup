import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getRecommendedJobs from '../requests/getRecommendedJobs';

const useGetRecommendedJobs = () => {
  return useQuery({
    queryKey: [Keys.GET_RECOMMENDED_JOBS],
    queryFn: getRecommendedJobs,
    refetchOnMount: false,
  });
};

export default useGetRecommendedJobs;
