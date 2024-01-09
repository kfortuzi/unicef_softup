// import makeRequest from 'src/utils/makeRequest';
import { GetArticlesResponse } from '../types';

const getArticles = async (): Promise<GetArticlesResponse | undefined> => {
  // const parsedData = await makeRequest<GetArticlesResponse>('/articles');

  // return parsedData;

  // TODO: remove mock request
  const mockRequest = new Promise<GetArticlesResponse>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Article 1',
          content: 'Article 1 content',
        },
        {
          id: '2',
          title: 'Article 2',
          content: 'Article 2 content',
        },
      ]);
    }, 1000);
  });

  const articles = await mockRequest;

  return articles;
};

export default getArticles;
