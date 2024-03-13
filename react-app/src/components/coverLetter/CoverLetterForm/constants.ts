import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.TO]: '',
  [FormField.COMPANY]: '',
  [FormField.COMPANY_ADDRESS]: '',
  [FormField.CONTENT]: '',
};
