import { FormField } from './enums';

export type FormValues = {
  [FormField.NAME]: string;
  [FormField.READING]: string;
  [FormField.WRITING]: string;
  [FormField.SPEAKING]: string;
  [FormField.IS_NATIVE]: boolean;
};
