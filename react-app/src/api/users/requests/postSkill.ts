import makeRequest from 'src/utils/makeRequest';

import { PostSkillRequest, PostSkillResponse } from '../types';

const postSkill = async (request: PostSkillRequest): Promise<PostSkillResponse | undefined> => {
  const parsedData = await makeRequest<PostSkillResponse>(
    '/user/skills',
    {
      method: 'POST',
      body: JSON.stringify(request),
    },
    true,
  );

  return parsedData;
};

export default postSkill;
