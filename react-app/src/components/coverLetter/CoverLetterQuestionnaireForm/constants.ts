import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.TITLE]: '',
  [FormField.COMPANY]: '',
  [FormField.TO_PERSON]: '',
  [FormField.COMPANY_ADDRESS]: '',
  [FormField.MOTIVE]: '',
  [FormField.TOPIC]: '',
};
