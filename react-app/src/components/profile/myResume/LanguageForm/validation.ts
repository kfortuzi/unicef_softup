import { object, string, array, boolean } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';

const basePrefix = 'profile.myResume';
const sectionPrefix = `${basePrefix}.languagesSection`;

const validationSchema = object().shape({
  [FormField.NAME]: array().of(string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.name`) }),
  ))
    .min(1, i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.name`) })),
  [FormField.IS_NATIVE]: boolean().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.isNative`) }),
  ),
  [FormField.READING]: string().when(FormField.IS_NATIVE, {
    is: false,
    then: (schema) =>
      schema.required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.reading`) })),
  }),
  [FormField.WRITING]: string().when(FormField.IS_NATIVE, {
    is: false,
    then: (schema) =>
      schema.required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.writing`) })),
  }),
  [FormField.SPEAKING]: string().when(FormField.IS_NATIVE, {
    is: false,
    then: (schema) =>
      schema.required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.speaking`) })),
  }),
});

const fieldsValidationSchema = object().shape({
  languages: array().of(validationSchema).required(),
});

export default fieldsValidationSchema;
