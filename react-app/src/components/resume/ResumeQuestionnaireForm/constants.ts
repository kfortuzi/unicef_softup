import customDigitalSkills from '../../../assets/jsons/digital-skills.json';
import customSoftSkills from '../../../assets/jsons/soft-skills.json';
import customTechnicalSkills from '../../../assets/jsons/technical-skills.json';
import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.EXPERIENCES]: '',
  [FormField.EDUCATIONS]: '',
  [FormField.NATIVE_LANGUAGE]: [],
  [FormField.OTHER_LANGUAGES_CONTAINER]: [
    {
      [FormField.OTHER_LANGUAGE]: [],
      [FormField.OTHER_LANGUAGE_LEVEL]: '',
    }
  ],
  [FormField.TECHNICAL_SKILLS]: [],
  [FormField.DIGITAL_SKILLS]: [],
  [FormField.SOFT_SKILLS]: [],
  [FormField.HOBBIES]: '',
  [FormField.SUMMARY]: '',
};

export const digitalSkillsOptions = customDigitalSkills.map((skill) => {
  return { value: skill, label: skill };
});

export const technicalSkillsOptions = customTechnicalSkills.map((skill) => {
  return { value: skill, label: skill };
});

export const softSkillsOptions = customSoftSkills.map((skill) => {
  return { value: skill, label: skill };
});
