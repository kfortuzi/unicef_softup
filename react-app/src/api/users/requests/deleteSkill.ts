import makeRequest from 'src/utils/makeRequest';

import { DeleteSkillRequest } from '../types';

const deleteSkill = (id: string) => {
  return makeRequest<DeleteSkillRequest>(
    `/user/skills/${id}`,
    {
      method: 'DELETE',
    },
    true,
  );
};

export default deleteSkill;
