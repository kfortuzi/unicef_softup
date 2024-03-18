import { FormField } from './enums';

export type FormValues = {
  [FormField.POSITION]: string;
  [FormField.COMPANY]: string;
  [FormField.PERSON_NAME]: string;
  [FormField.COMPANY_ADDRESS]: string;
  [FormField.MOTIVE]: string;
  [FormField.TOPICS]: string;
};
