import { object, string, array } from 'yup';

import { Publication } from 'src/api/resumes/types';
import i18n from 'src/locales';

import { FormField } from './enums';

const basePrefix = 'profile.myResume';
const sectionPrefix = `${basePrefix}.publicationsSection`;

const validationSchema = {
  [FormField.NAME]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.name`) }),
  ),
  [FormField.RELEASE_DATE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.releaseDate`) }),
  ),
  [FormField.LINK]: string(),
};

const fieldsValidationSchema = object().shape({
  publications: array()
    .of(object<Publication>().shape(validationSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
});

export default fieldsValidationSchema;
