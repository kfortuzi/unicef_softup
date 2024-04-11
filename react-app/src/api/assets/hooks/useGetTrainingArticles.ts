import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getTrainingArticles from '../requests/getTrainingArticles';
import { GetTrainingArticlesRequest } from '../types';

const useGetTrainingArticles = (request: GetTrainingArticlesRequest) => {
  return useQuery({
    queryKey: [Keys.TRAINING_ARTICLES, request],
    queryFn: () => getTrainingArticles(),
  });
  // return useInfiniteQuery({
  //   queryKey: [Keys.TRAINING_ARTICLES, request],
  //   queryFn: ({ pageParam }) => getTrainingArticles({ page: pageParam, pageSize: request.pageSize }),
  //   initialPageParam: '',
  //   getNextPageParam: (lastPage) => lastPage?.slice(-1)[0].id ?? undefined,
  // });
};

export default useGetTrainingArticles;
