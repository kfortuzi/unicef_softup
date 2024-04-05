import { FormField } from './enums';

export type FormValues = {
  [FormField.PROFILE_PICTURE]?: string;
  [FormField.NAME]?: string;
  [FormField.LAST_NAME]?: string;
  [FormField.EMAIL]: string;
  [FormField.LOCATION]?: string;
  [FormField.PHONE_NUMBER]?: string;
  [FormField.LINKEDIN_URL]?: string;
};
