import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.DRIVING_LICENCES]: [],
};

export const drivingLicenceOptions = ['A', 'B', 'C', 'D', 'BE', 'C1', 'C1E', 'CE', 'D1', 'D1E', 'DE'];
