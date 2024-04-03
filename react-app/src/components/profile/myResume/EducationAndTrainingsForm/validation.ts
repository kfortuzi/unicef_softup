import { object, string, array } from 'yup';

import { Education } from 'src/api/resumes/types';
import i18n from 'src/locales';

import { FormField } from './enums';

const basePrefix = 'profile.myResume';
const sectionPrefix = `${basePrefix}.educationAndTrainingsSection`;

const validationSchema = {
  [FormField.TITLE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.title`) }),
  ),
  [FormField.TYPE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.type`) }),
  ),
  [FormField.LOCATION]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.location`) }),
  ),
  [FormField.START_DATE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.startDate`) }),
  ),
  [FormField.END_DATE]: string(),
};

const fieldsValidationSchema = object().shape({
  educations: array().of(object<Education>().shape(validationSchema)).required('Must have fields'),
});

export default fieldsValidationSchema;
