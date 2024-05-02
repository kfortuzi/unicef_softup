import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.PROFILE_PICTURE]: '',
  [FormField.FIRST_NAME]: '',
  [FormField.LAST_NAME]: '',
  [FormField.NATIONALITY]: '',
  [FormField.EMAIL]: '',
  [FormField.LINKEDIN_URL]: '',
  [FormField.LOCATION]: '',
  [FormField.PHONE_NUMBER]: '',
};
