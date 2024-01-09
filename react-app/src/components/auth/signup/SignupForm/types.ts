import { FormField } from './enums';

export type FormValues = {
  [FormField.EMAIL]: string;
  [FormField.FIRST_NAME]: string;
  [FormField.LAST_NAME]: string;
  [FormField.PASSWORD]: string;
  [FormField.CONFIRM_PASSWORD]: string;
};
