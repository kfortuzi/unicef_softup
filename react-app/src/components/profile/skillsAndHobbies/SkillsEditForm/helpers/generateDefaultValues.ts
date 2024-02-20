import { GetSkillsResponse } from 'src/api/users/types';

export function generateDefaultValues(
  skills: GetSkillsResponse | undefined,
): { label: string; value: string }[] {
  return skills?.map((skill) => ({ label: skill.name, value: skill.name })) || [];
}
