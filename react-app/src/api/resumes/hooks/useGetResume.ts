import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getResume from '../requests/getResume';
import { GetResumeRequest } from '../types';

const useGetResume = (req: GetResumeRequest) => {
  return useQuery({
    queryKey: [Keys.GET_RESUME],
    queryFn: () => getResume(req),
    refetchOnMount: true,
    enabled: !!req.id,
  });
};

export default useGetResume;
