import makeRequest from 'src/utils/makeRequest';

import { GetSkillsResponse } from '../types';

const getSkills = async (): Promise<GetSkillsResponse> => {
  const parsedData = await makeRequest<GetSkillsResponse>('/user/skills', {
    method: 'GET',
  });

  return parsedData;
};

export default getSkills;
