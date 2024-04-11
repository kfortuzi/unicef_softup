import makeRequest from 'src/utils/makeRequest';

import { GetTrainingVideosRequest, GetTrainingVideosResponse, GetTrainingVideosRequest } from '../types';

const getTrainingVideos = async (
  request: GetTrainingVideosRequest,
): Promise<GetTrainingVideosResponse | undefined> => {
  const response = await makeRequest<GetTrainingVideosResponse>('/assets/videos');
  //TODO: To be implemented after the backend is ready
  // const response = await makeRequest<GetTrainingVideosResponse>(
  //   `/assets/videos?take=${request.take}&cursor=${request.cursor}`,
  // );

  return response;
};

export default getTrainingVideos;
