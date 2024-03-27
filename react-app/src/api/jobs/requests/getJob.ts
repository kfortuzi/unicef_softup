import makeRequest from 'src/utils/makeRequest';

import jobResponse from '../getJobResponse.json';
import { BaseResponse, GetJobRequest, GetJobResponse } from '../types';

const getJob = async (req: GetJobRequest): Promise<BaseResponse> => {
  // TODO: Replace with actual API request
  const mockRequest = new Promise<GetJobResponse>((resolve) => {
    resolve({
      id: '1',
      userId: '1',
      to: 'To',
      company: 'Company',
      companyAddress: 'Company Address',
      content: 'Content',
      createdAt: '2021-08-01T00:00:00Z',
    });
  });

  const response = await mockRequest;

  return jobResponse;
};

export default getJob;
