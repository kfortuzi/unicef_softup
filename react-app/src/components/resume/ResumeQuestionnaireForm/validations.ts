import { ObjectSchema, object, string, array } from 'yup';

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
  [FormField.NATIVE_LANGUAGE]: array().of(string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.nativeLanguage`) }),
  )).min(1).required(),
  [FormField.OTHER_LANGUAGES_CONTAINER]: array().of(
    object().shape({
      [FormField.OTHER_LANGUAGE]: array().of(string().required(
        i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.otherLanguage`) }),
      )).required(),
      [FormField.OTHER_LANGUAGE_LEVEL]: string().required(
        i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.otherLanguageLevel`) }),
      ),
    })
  ).required().min(1),
  [FormField.TECHNICAL_SKILLS]: array().of(string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.technicalSkills`) }),
  )).required().min(1),
  [FormField.DIGITAL_SKILLS]: array().of(string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.digitalSkills`) }),
  )).required().min(1),
  [FormField.SOFT_SKILLS]: array().of(string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.softSkills`) }),
  )).required().min(1),
  [FormField.HOBBIES]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.hobbies`) }),
  ),
  [FormField.SUMMARY]: string().required(
    i18n.t(`${global}.required`, { field: i18n.t(`${prefix}.summary`) }),
  ),
});

export default validationSchema;
