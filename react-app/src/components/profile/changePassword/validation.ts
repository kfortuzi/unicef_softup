import { ObjectSchema, object, ref, string } from 'yup';

import passwordRegex from 'src/constants/passwordRegex';
import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.CURRENT_PASSWORD]: string().required(i18n.t('auth.resetPassword.passwordRequired')),
  [FormField.NEW_PASSWORD]: string()
    .matches(passwordRegex, {
      excludeEmptyString: true,
      message: i18n.t('auth.resetPassword.invalidPassword'),
    })
    .required(i18n.t('auth.resetPassword.passwordRequired')),
  [FormField.CONFIRM_NEW_PASSWORD]: string()
    .matches(passwordRegex, {
      excludeEmptyString: true,
      message: i18n.t('auth.resetPassword.invalidPassword'),
    })
    .required(i18n.t('auth.resetPassword.confirmPasswordRequired'))
    .oneOf([ref(FormField.NEW_PASSWORD)], i18n.t('auth.resetPassword.passwordsMustMatch')),
});

export default validationSchema;
