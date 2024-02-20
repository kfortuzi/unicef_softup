import { GetSkillsResponse } from 'src/api/users/types';

const handleSelect = (
  value: string,
  skills: GetSkillsResponse | undefined,
  changeLog: Map<string, string>,
): void => {
  if (skills?.some((skill: { name: string }) => skill.name === value)) {
    changeLog.set(value, 'unchanged');
  } else {
    changeLog.set(value, 'added');
  }
};

const handleDeselect = (
  value: string,
  skills: GetSkillsResponse | undefined,
  changeLog: Map<string, string>,
): void => {
  if (!skills?.some((skill: { name: string }) => skill.name === value)) {
    changeLog.delete(value);
  } else {
    changeLog.set(value, 'removed');
  }
};

export { handleSelect, handleDeselect };
