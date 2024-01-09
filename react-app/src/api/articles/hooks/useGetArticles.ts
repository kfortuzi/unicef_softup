import { useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getArticles from '../requests/getArticles';

const useGetArticles = () =>
  useQuery({
    queryKey: [Keys.GET_ARTICLES],
    queryFn: getArticles,
    refetchOnMount: false,
  });

export default useGetArticles;
