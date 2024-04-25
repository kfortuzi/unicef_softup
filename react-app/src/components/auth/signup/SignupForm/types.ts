import { FormField } from './enums';

export type FormValues = {
  [FormField.FIRST_NAME]: string;
  [FormField.LAST_NAME]: string;
  [FormField.EMAIL]: string;
  [FormField.PASSWORD]: string;
};
