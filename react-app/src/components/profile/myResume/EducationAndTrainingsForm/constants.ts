import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.TITLE]: '',
  [FormField.TYPE]: '',
  [FormField.LOCATION]: '',
  [FormField.START_DATE]: '',
  [FormField.END_DATE]: '',
};
