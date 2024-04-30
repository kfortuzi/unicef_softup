import { ObjectSchema, object, string } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const basePrefix = 'profile';
const prefix = `${basePrefix}.personalInfo`;

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.FIRST_NAME]: string().required(
    i18n.t(`${prefix}.required`, { field: i18n.t(`${prefix}.firstName`) }),
  ),
  [FormField.LAST_NAME]: string().required(
    i18n.t(`${prefix}.required`, { field: i18n.t(`${prefix}.lastName`) }),
  ),
  [FormField.PROFESSION]: string(),
  [FormField.PHONE_NUMBER]: string().matches(
    /([+(\d]{1})(([\d+() -.]){5,16})([+(\d]{1})/gm,  {
      message: i18n.t(`${prefix}.phoneNumberValidation`),
      excludeEmptyString: true
    }
  ).required(
    i18n.t(`${prefix}.required`, { field: i18n.t(`${prefix}.phoneNumber`) }),
  ),
  [FormField.BIRTHDAY_DATE]: string().nullable(),
});

export default validationSchema;
