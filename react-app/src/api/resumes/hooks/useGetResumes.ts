import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getResumes from '../requests/getResumes';

const useGetResumes = () => {
  return useQuery({
    queryKey: [Keys.GET_RESUMES],
    queryFn: getResumes,
    refetchOnMount: true,
  });
};

export default useGetResumes;
