import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getCoverLetter from '../requests/getCoverLetter';
import { GetCoverLetterRequest } from '../types';

const useGetCoverLetter = (req: GetCoverLetterRequest) => {
  return useQuery({
    queryKey: [Keys.GET_COVER_LETTER, req.id],
    queryFn: () => getCoverLetter(req),
    refetchOnMount: false,
    enabled: !!req.id,
  });
};

export default useGetCoverLetter;
