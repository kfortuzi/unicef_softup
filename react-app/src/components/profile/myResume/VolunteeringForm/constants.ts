import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.ROLE]: '',
  [FormField.ORGANIZATION]: '',
  [FormField.ICON]: '',
  [FormField.START_DATE]: '',
  [FormField.END_DATE]: '',
};
