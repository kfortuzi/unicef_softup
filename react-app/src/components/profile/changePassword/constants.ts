import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.CURRENT_PASSWORD]: '',
  [FormField.NEW_PASSWORD]: '',
  [FormField.CONFIRM_NEW_PASSWORD]: '',
};
