import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.POSITION]: '',
  [FormField.COMPANY]: '',
  [FormField.RESPONSIBILITIES]: '',
  [FormField.START_DATE]: '',
  [FormField.END_DATE]: '',
};
