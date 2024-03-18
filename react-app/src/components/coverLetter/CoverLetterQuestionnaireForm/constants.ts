import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.POSITION]: '',
  [FormField.COMPANY]: '',
  [FormField.PERSON_NAME]: '',
  [FormField.COMPANY_ADDRESS]: '',
  [FormField.MOTIVE]: '',
  [FormField.TOPICS]: '',
};
