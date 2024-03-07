import { FormField } from './enums';

export type FormValues = {
  [FormField.POSITION]: string;
  [FormField.COMPANY]: string;
  [FormField.RESPONSIBILITIES]: string;
  [FormField.START_DATE]: string;
  [FormField.END_DATE]: string;
};
