import { ObjectSchema, object, string } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const basePrefix = 'profile';
const prefix = `${basePrefix}.personalInfo`;

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.FIRST_NAME]: string(),
  [FormField.LAST_NAME]: string(),
  [FormField.PROFESSION]: string(),
  [FormField.PHONE_NUMBER]: string().matches(
    /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/,  {
      message: i18n.t(`${prefix}.phoneNumberValidation`),
      excludeEmptyString: true
    }
  ),
  [FormField.BIRTHDAY_DATE]: string(),
});

export default validationSchema;
