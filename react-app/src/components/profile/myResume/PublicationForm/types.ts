import { FormField } from './enums';

export type FormValues = {
  [FormField.NAME]: string;
  [FormField.RELEASE_DATE]: string;
  [FormField.LINK]: string;
};
