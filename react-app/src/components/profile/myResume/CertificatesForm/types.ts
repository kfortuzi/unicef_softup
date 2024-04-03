import { FormField } from './enums';

export type FormValues = {
  [FormField.NAME]: string;
  [FormField.RECEIVED_DATE]: string;
  [FormField.EXPIRATION_DATE]: string;
};
