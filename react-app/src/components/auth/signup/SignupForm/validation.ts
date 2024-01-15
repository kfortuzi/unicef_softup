import { ObjectSchema, object, string } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[\w\S]{7,}$/;

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.EMAIL]: string()
    .email(i18n.t('auth.signUp.emailWrongFormat'))
    .required(i18n.t('auth.signUp.emailRequired')),
  [FormField.PASSWORD]: string()
    .matches(passwordRegex, {
      excludeEmptyString: true,
      message: i18n.t('auth.signUp.invalidPassword'),
    })
    .required(i18n.t('auth.signUp.passwordRequired')),
});

export default validationSchema;
