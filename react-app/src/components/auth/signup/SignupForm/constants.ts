import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.EMAIL]: '',
  [FormField.FIRST_NAME]: '',
  [FormField.LAST_NAME]: '',
  [FormField.PASSWORD]: '',
  [FormField.CONFIRM_PASSWORD]: '',
};
