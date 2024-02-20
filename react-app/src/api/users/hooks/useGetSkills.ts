import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getSkills from '../requests/getSkills';

const useGetSkills = () => {
  return useQuery({
    queryKey: [Keys.GET_SKILLS],
    queryFn: getSkills,
    refetchOnMount: false,
  });
};

export default useGetSkills;
