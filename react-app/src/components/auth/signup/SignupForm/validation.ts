import { ObjectSchema, object, string } from 'yup';

import passwordRegex from 'src/constants/passwordRegex';
import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.FIRST_NAME]: string().required(i18n.t('auth.signUp.firstNameRequired')),
  [FormField.LAST_NAME]: string().required(i18n.t('auth.signUp.lastNameRequired')),
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
