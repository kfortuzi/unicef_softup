import makeRequest from 'src/utils/makeRequest';

import { GetTrainingVideosResponse } from '../types';

const getTrainingVideos = async (
): Promise<GetTrainingVideosResponse | undefined> => {
  const response = await makeRequest<GetTrainingVideosResponse>('/assets/videos');
  //TODO: To be implemented after the backend is ready
  // const response = await makeRequest<GetTrainingVideosResponse>(
  //   `/assets/videos?take=${request.take}&cursor=${request.cursor}`,
  // );

  return response;
};

export default getTrainingVideos;
