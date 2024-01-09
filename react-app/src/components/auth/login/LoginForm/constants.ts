import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.EMAIL]: '',
  [FormField.PASSWORD]: '',
  [FormField.REMEMBER_ME]: false,
};
