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
    is: (isNative: number | boolean) => Number(isNative) === 0,
    then: (schema) =>
      schema.required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.reading`) })),
    otherwise: (schema) => schema.nullable(),
  }),
  [FormField.WRITING]: string().when(FormField.IS_NATIVE, {
    is: (isNative: number | boolean) => Number(isNative) === 0,
    then: (schema) =>
      schema.required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.writing`) })),
    otherwise: (schema) => schema.nullable(),
  }),
  [FormField.SPEAKING]: string().when(FormField.IS_NATIVE, {
    is: (isNative: number | boolean) => Number(isNative) === 0,
    then: (schema) =>
      schema.required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.speaking`) })),
    otherwise: (schema) => schema.nullable(),
  }),
});

const fieldsValidationSchema = object().shape({
  languages: array().of(validationSchema).required(),
});

export default fieldsValidationSchema;
