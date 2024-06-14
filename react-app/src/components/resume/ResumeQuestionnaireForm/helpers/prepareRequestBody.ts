import { FormValues } from '../types';

export const prepareRequestBody = (formValue: FormValues) => {
  const {
    otherLanguagesContainer,
    softSkills,
    technicalSkills,
    digitalSkills,
    nativeLanguage,
    ...restOfData
  } = formValue;

  const otherLanguage = otherLanguagesContainer
    .map(languageContainer => `${languageContainer.otherLanguage[0]} ${languageContainer.otherLanguageLevel}`)
    .join(', ');
  const softSkillsJoined = softSkills.join(', ');
  const technicalSkillsJoined = technicalSkills.join(', ');
  const digitalSkillsJoined = digitalSkills.join(', ');

  const requestBody = {
    ...restOfData,
    nativeLanguage: nativeLanguage[0],
    otherLanguage,
    softSkills: softSkillsJoined,
    technicalSkills: technicalSkillsJoined,
    digitalSkills: digitalSkillsJoined
  };

  return requestBody;
}
