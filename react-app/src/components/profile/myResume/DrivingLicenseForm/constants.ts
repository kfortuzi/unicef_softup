import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.DRIVING_LICENSE]: '',
};

export const drivingLicenseOptions: string[] = [
  'AM',
  'A1',
  'A2',
  'A',
  'B1',
  'BE',
  'C1',
  'C1E',
  'C',
  'CE',
  'D1',
  'D1E',
  'D',
  'DE'
];
