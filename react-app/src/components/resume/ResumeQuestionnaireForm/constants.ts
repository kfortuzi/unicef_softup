import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.EXPERIENCES]: '',
  [FormField.EDUCATIONS]: '',
  [FormField.NATIVE_LANGUAGE]: '',
  [FormField.OTHER_LANGUAGE]: '',
  [FormField.TECHNICAL_SKILLS]: '',
  [FormField.SOFT_SKILLS]: '',
  [FormField.HOBBIES]: '',
  [FormField.SUMMARY]: '',
};
