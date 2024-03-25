import { object, string, array, boolean } from 'yup';

import { Language } from 'src/api/resumes/types';
import i18n from 'src/locales';

import { FormField } from './enums';

const basePrefix = 'profile.myResume';
const sectionPrefix = `${basePrefix}.languagesSection`;

// Define a separate validation schema for the conditionally required fields
const conditionalValidationSchema = {
  [FormField.READING]: string()
    .required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.reading`) })),
  [FormField.WRITING]: string()
    .required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.writing`) })),
  [FormField.SPEAKING]: string()
    .required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.speaking`) })),
};

const validationSchema = {
  [FormField.NAME]: string()
    .required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.name`) })),
  [FormField.IS_NATIVE]: boolean()
    .required(i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.isNative`) })),
  [FormField.READING]: string(),
  [FormField.WRITING]: string(),
  [FormField.SPEAKING]: string(),
};

// Merge the two schemas
if(validationSchema[FormField.IS_NATIVE]) {
  Object.assign(validationSchema, conditionalValidationSchema);
}

const fieldsValidationSchema = object().shape({
  languages: array()
    .of(
      object<Language>().shape(validationSchema)
    )
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
});

export default fieldsValidationSchema;
