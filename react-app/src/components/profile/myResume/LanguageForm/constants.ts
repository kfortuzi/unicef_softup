import { FormField } from './enums';
import { FormValues } from './types';

export const defaultValues: FormValues = {
  [FormField.NAME]: '',
  [FormField.READING]: '',
  [FormField.WRITING]: '',
  [FormField.SPEAKING]: '',
  [FormField.IS_NATIVE]: false,
};

export const languageLevels = [
  { label: 'A1', value: 'A1' },
  { label: 'A2', value: 'A2' },
  { label: 'B1', value: 'B1' },
  { label: 'B2', value: 'B2' },
  { label: 'C1', value: 'C1' },
  { label: 'C2', value: 'C2' },
];
