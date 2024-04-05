import { object, string, array } from 'yup';

import { WorkExperience } from 'src/api/resumes/types';
import i18n from 'src/locales';

import { FormField } from './enums';

const basePrefix = 'profile.myResume';
const sectionPrefix = `${basePrefix}.workExperiencesSection`;

const validationSchema = {
  [FormField.POSITION]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.position`) }),
  ),
  [FormField.COMPANY]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.company`) }),
  ),
  [FormField.RESPONSIBILITIES]: string(),
  [FormField.START_DATE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.startDate`) }),
  ),
  [FormField.END_DATE]: string(),
};

const fieldsValidationSchema = object().shape({
  experiences: array().of(object<WorkExperience>().shape(validationSchema)).required('Must have fields'),
});

export default fieldsValidationSchema;
