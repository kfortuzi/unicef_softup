import { FormField } from './enums';

export type FormValues = {
  [FormField.EXPERIENCE]: string;
  [FormField.EDUCATION]: string;
  [FormField.MOTHER_LANGUAGE]: string;
  [FormField.LANGUAGES]: string;
  [FormField.TECHNICAL_SKILLS]: string;
  [FormField.SOFT_SKILLS]: string;
  [FormField.HOBBIES]: string;
  [FormField.SOMETHING_ELSE]: string;
};
