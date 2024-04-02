import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getCoverLetters from '../requests/getCoverLetters';

const useGetCoverLetters = () => {
  return useQuery({
    queryKey: [Keys.GET_COVER_LETTERS],
    queryFn: getCoverLetters,
    refetchOnMount: true,
  });
};

export default useGetCoverLetters;
