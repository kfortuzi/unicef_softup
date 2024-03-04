import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.FIRST_NAME]: '',
  [FormField.LAST_NAME]: '',
  [FormField.PHONE_NUMBER]: '',
  [FormField.PROFESSION]: '',
  [FormField.BIRTHDAY_DATE]: '',
};
