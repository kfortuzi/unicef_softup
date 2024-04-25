import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.FIRST_NAME]: '',
  [FormField.LAST_NAME]: '',
  [FormField.EMAIL]: '',
  [FormField.PASSWORD]: '',
};
