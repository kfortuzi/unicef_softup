import makeRequest from 'src/utils/makeRequest';
import coverLetterResponse from '../getCoverLetterResponse.json';

import { BaseResponse, GetCoverLetterRequest, GetCoverLetterResponse } from '../types';

const getCoverLetter = async (req: GetCoverLetterRequest): Promise<BaseResponse> => {
  // TODO: Replace with actual API request
  const mockRequest = new Promise<GetCoverLetterResponse>((resolve) => {
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

  return coverLetterResponse;
};

export default getCoverLetter;
