import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import Keys from '../keys';
import getTrainingVideos from '../requests/getTrainingVideos';
import { GetTrainingVideosRequest } from '../types';

const useGetTrainingVideos = (request: GetTrainingVideosRequest) => {
  return useQuery({
    queryKey: [Keys.GET_TRAININGS_VIDEOS, request],
    queryFn: () => getTrainingVideos(request),
  });

  //TODO: To be implemented after the backend is ready
  // return useInfiniteQuery({
  //   queryKey: [Keys.GET_TRAININGS_VIDEOS, request],
  //   queryFn: ({ pageParam }) => getTrainingVideos({ cursor: pageParam, take: request.take }),
  //   initialPageParam: '',
  //   getNextPageParam: (lastPage) => lastPage?.slice(-1)[0].id ?? undefined,
  // });
};

export default useGetTrainingVideos;
