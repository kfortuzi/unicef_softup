import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.PROFILE_PICTURE]: '',
  [FormField.NAME]: '',
  [FormField.EMAIL]: '',
  [FormField.LINKEDIN_URL]: '',
  [FormField.LOCATION]: '',
  [FormField.PHONE_NUMBER]: '',
};
