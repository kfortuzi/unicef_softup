import { FormField } from './enums';

export type FormValues = {
  [FormField.ROLE]: string;
  [FormField.ORGANIZATION]: string;
  [FormField.START_DATE]: string;
  [FormField.END_DATE]: string;
};
