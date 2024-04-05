import makeRequest from 'src/utils/makeRequest';

import { PostJobTipsAndAdvicesRequest, PostJobTipsAndAdvicesResponse } from '../types';

export const postJobTipsAndAdvices = async (
  request: PostJobTipsAndAdvicesRequest,
): Promise<PostJobTipsAndAdvicesResponse | undefined> => {
  const parsedData = makeRequest<PostJobTipsAndAdvicesResponse>(`/jobs/${request.id}/tips-and-advices`, {
    method: 'POST',
    body: JSON.stringify(request),
  });

  return parsedData;
};

export default postJobTipsAndAdvices;
