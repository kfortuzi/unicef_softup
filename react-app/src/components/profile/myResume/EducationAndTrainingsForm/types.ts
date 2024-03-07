import { FormField } from './enums';

export type FormValues = {
  [FormField.TITLE]: string;
  [FormField.TYPE]: string;
  [FormField.LOCATION]: string;
  [FormField.START_DATE]: string;
  [FormField.END_DATE]: string;
};
