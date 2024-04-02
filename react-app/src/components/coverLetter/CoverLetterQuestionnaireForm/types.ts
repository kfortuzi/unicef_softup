import { FormField } from './enums';

export type FormValues = {
  [FormField.TITLE]: string;
  [FormField.COMPANY]: string;
  [FormField.TO_PERSON]: string;
  [FormField.COMPANY_ADDRESS]: string;
  [FormField.MOTIVE]: string;
  [FormField.TOPIC]: string;
};
