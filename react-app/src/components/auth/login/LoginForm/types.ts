import { FormField } from './enums';

export type FormValues = {
  [FormField.EMAIL]: string;
  [FormField.PASSWORD]: string;
  [FormField.REMEMBER_ME]: boolean;
};
