import { ObjectSchema, object, string } from 'yup';

import i18n from '../../../locales';
import { FormField } from './enums';
import { FormValues } from './types';

const prefix = 'coverLetterDetails';
const global = 'globalStrings';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.TO]: string().required(i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.to`) })),
  [FormField.COMPANY]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.company`) }),
  ),
  [FormField.CONTENT]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.content`) }),
  ),
  [FormField.COMPANY_ADDRESS]: string(),
});

export default validationSchema;
