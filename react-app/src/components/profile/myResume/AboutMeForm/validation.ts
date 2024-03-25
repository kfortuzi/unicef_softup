import { ObjectSchema, object, string } from 'yup';

import i18n from 'src/locales';

import { FormField } from './enums';
import { FormValues } from './types';

const prefix = 'profile.myResume';

const validationSchema: ObjectSchema<FormValues> = object({
  [FormField.ABOUT_ME]: string().required(
    i18n.t(`${prefix}.required`, { field: i18n.t(`${prefix}.aboutMeSection.aboutMe`) }),
  ),
});

export default validationSchema;
