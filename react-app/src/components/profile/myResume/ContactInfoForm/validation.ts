import { ObjectSchema, object, string } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const basePrefix = 'profile.myResume';
const prefix = `${basePrefix}.contactInfoSection`;

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.PROFILE_PICTURE]: string(),
  [FormField.NAME]: string(),
  [FormField.LAST_NAME]: string(),
  [FormField.EMAIL]: string()
    .email(i18n.t(`${prefix}.email`))
    .required(i18n.t(`${prefix}.email`)),
  [FormField.LINKEDIN_URL]: string(),
  [FormField.LOCATION]: string(),
  [FormField.PHONE_NUMBER]: string(),
});

export default validationSchema;
