import { ObjectSchema, object, string } from 'yup';

import i18n from '../../../locales';
import { FormField } from './enums';
import { FormValues } from './types';

const prefix = 'resumeQuestionnaire';
const global = 'globalStrings';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.EXPERIENCES]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.experiences`) }),
  ),
  [FormField.EDUCATIONS]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.educations`) }),
  ),
  [FormField.NATIVE_LANGUAGE]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.nativeLanguage`) }),
  ),
  [FormField.OTHER_LANGUAGE]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.otherLanguage`) }),
  ),
  [FormField.TECHNICAL_SKILLS]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.technicalSkills`) }),
  ),
  [FormField.DIGITAL_SKILLS]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.digitalSkills`) }),
  ),
  [FormField.SOFT_SKILLS]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.softSkills`) }),
  ),
  [FormField.HOBBIES]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.hobbies`) }),
  ),
  [FormField.SUMMARY]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.summary`) }),
  ),
});

export default validationSchema;
