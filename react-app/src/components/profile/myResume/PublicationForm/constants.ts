import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.NAME]: '',
  [FormField.RELEASE_DATE]: '',
  [FormField.LINK]: '',
};
