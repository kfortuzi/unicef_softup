import { FormField } from './enums';

export type FormValues = {
  [FormField.CURRENT_PASSWORD]: string;
  [FormField.NEW_PASSWORD]: string;
  [FormField.CONFIRM_NEW_PASSWORD]: string;
};
