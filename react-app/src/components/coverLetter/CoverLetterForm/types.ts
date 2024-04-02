import { FormField } from './enums';

export type FormValues = {
  [FormField.TO]: string;
  [FormField.COMPANY]: string;
  [FormField.CONTENT]: string;
  [FormField.COMPANY_ADDRESS]?: string;
};
