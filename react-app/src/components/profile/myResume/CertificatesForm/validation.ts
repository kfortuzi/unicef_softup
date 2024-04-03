import { object, string, array } from 'yup';

import { Certificate } from 'src/api/resumes/types';
import i18n from 'src/locales';

import { FormField } from './enums';

const basePrefix = 'profile.myResume';
const sectionPrefix = `${basePrefix}.certificatesSection`;

const validationSchema = {
  [FormField.NAME]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.name`) }),
  ),
  [FormField.RECEIVED_DATE]: string().required(
    i18n.t(`${basePrefix}.required`, { field: i18n.t(`${sectionPrefix}.receivedDate`) }),
  ),
  [FormField.EXPIRATION_DATE]: string(),
};

const fieldsValidationSchema = object().shape({
  certificates: array()
    .of(object<Certificate>().shape(validationSchema))
    .required('Must have fields')
    .min(1, 'Minimum of 1 field'),
});

export default fieldsValidationSchema;
