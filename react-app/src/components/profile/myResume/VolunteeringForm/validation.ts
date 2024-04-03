import { object, string, array } from 'yup';

import { Volunteering } from 'src/api/resumes/types';
import i18n from 'src/locales';

import { FormField } from './enums';

const basePrefix = 'profile.myResume';
const sectionPrefix = `${basePrefix}.volunteeringsSection`;

const validationSchema = {
  [FormField.ROLE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.role`) }),
  ),
  [FormField.ORGANIZATION]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.organization`) }),
  ),
  [FormField.START_DATE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.startDate`) }),
  ),
  [FormField.END_DATE]: string(),
};

const fieldsValidationSchema = object().shape({
  volunteering: array().of(object<Volunteering>().shape(validationSchema)).required('Must have fields'),
});

export default fieldsValidationSchema;
