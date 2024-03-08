import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.NAME]: '',
  [FormField.RECEIVED_DATE]: '',
  [FormField.EXPIRATION_DATE]: '',
};
