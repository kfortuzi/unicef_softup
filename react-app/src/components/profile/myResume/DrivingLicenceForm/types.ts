import { DrivingLicence } from 'src/api/resumes/types';

import { FormField } from './enums';

export type FormValues = {
  [FormField.DRIVING_LICENCES]: DrivingLicence[];
};
