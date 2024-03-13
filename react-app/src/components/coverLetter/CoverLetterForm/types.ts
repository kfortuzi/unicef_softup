import { FormField } from './enums';

export type FormValues = {
  [FormField.TO]: string;
  [FormField.COMPANY]: string;
  [FormField.COMPANY_ADDRESS]: string;
  [FormField.CONTENT]: string;
};
