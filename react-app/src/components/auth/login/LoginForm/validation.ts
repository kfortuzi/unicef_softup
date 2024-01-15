import { ObjectSchema, object, string } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.EMAIL]: string()
    .email(i18n.t('auth.login.emailWrongFormat'))
    .required(i18n.t('auth.login.emailRequired')),
  [FormField.PASSWORD]: string().required(i18n.t('auth.login.passwordRequired')),
});

export default validationSchema;
