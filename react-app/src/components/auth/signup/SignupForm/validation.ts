import { ObjectSchema, object, ref, string } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.EMAIL]: string()
    .email(i18n.t('auth.signUp.emailWrongFormat'))
    .required(i18n.t('auth.signUp.emailRequired')),
  [FormField.FIRST_NAME]: string().required(i18n.t('auth.signUp.firstNameRequired')),
  [FormField.LAST_NAME]: string().required(i18n.t('auth.signUp.lastNameRequired')),
  [FormField.PASSWORD]: string().required(i18n.t('auth.signUp.passwordRequired')),
  [FormField.CONFIRM_PASSWORD]: string()
    .required(i18n.t('auth.signUp.confirmPasswordRequired'))
    .oneOf([ref(FormField.PASSWORD)], i18n.t('auth.signUp.passwordsMustMatch')),
});

export default validationSchema;
