import makeRequest from 'src/utils/makeRequest';

import { GetTrainingArticlesResponse } from '../types';

const getTrainingArticles = async (): Promise<GetTrainingArticlesResponse> => {
  //TODO: To be implemented after the backend is ready
  // const response = await makeRequest<GetTrainingArticlesResponse>(
  //   `/assets/articles?take=${request.take}&cursor=${request.cursor}`,
  // );

  const response = await makeRequest<GetTrainingArticlesResponse>('/assets/articles');

  return response;
};

export default getTrainingArticles;
