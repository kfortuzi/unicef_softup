import makeRequest from 'src/utils/makeRequest';

import { RequestVerificationRequest } from '../types';

const postRequestVerification = async (request: RequestVerificationRequest) => {
  const parsedData = await makeRequest(
    '/user/request-verification',
    {
      method: 'POST',
      body: JSON.stringify(request),
    },
    false,
  );

  return parsedData;
};

export default postRequestVerification;
