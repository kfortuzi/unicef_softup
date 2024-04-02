import { ObjectSchema, object, string } from 'yup';

import i18n from '../../../locales';
import { FormField } from './enums';
import { FormValues } from './types';

const prefix = 'coverLetterDetails';
const global = 'globalStrings';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.TITLE]: string().required(i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.to`) })),
  [FormField.COMPANY]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.company`) }),
  ),
  [FormField.TO_PERSON]: string().required(i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.to`) })),
  [FormField.COMPANY_ADDRESS]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.companyAddress`) }),
  ),
  [FormField.MOTIVE]: string().required(i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.motive`) })),
  [FormField.TOPIC]: string().required(i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.topic`) })),
});

export default validationSchema;
