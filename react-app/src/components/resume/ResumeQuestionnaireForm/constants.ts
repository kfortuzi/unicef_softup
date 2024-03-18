import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.EXPERIENCE]: '',
  [FormField.EDUCATION]: '',
  [FormField.MOTHER_LANGUAGE]: '',
  [FormField.LANGUAGES]: '',
  [FormField.TECHNICAL_SKILLS]: '',
  [FormField.SOFT_SKILLS]: '',
  [FormField.HOBBIES]: '',
  [FormField.SOMETHING_ELSE]: '',
};
