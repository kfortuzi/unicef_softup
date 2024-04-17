import { FormField } from './enums';

export type FormValues = {
  [FormField.FIRST_NAME]?: string;
  [FormField.LAST_NAME]?: string;
  [FormField.PHONE_NUMBER]?: string;
  [FormField.PROFESSION]?: string;
  [FormField.BIRTHDAY_DATE]?: string;
};
