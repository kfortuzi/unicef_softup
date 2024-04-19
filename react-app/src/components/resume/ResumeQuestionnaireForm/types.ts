import { FormField } from './enums';

export type FormValues = {
  [FormField.EXPERIENCES]: string;
  [FormField.EDUCATIONS]: string;
  [FormField.NATIVE_LANGUAGE]: string;
  [FormField.OTHER_LANGUAGE]: string;
  [FormField.TECHNICAL_SKILLS]: string;
  [FormField.SOFT_SKILLS]: string;
  [FormField.HOBBIES]: string;
  [FormField.SUMMARY]: string;
};
