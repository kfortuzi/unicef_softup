import dayjs from 'dayjs';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import usePatchUser from 'src/api/users/hooks/usePatchUser';
import Button from 'src/components/common/Button/Button';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';
import i18n from 'src/locales';

import { FormField } from './enums';
import { generateDefaultValues } from './helpers/generateDefaultValues';

interface Props {
  toggleEditMode: VoidFunction;
}

const PersonalInfoEditForm: React.FC<Props> = ({ toggleEditMode }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });
  const { data: user } = useGetProfile();
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: generateDefaultValues(user),
    shouldFocusError: true,
  });

  const { mutate: patchUser, isPending } = usePatchUser();
  const submitForm = handleSubmit((values) => patchUser(values));

  return (
    <form
      className="profile-form-edit"
      onSubmit={submitForm}
    >
      <div className="input-element-container">
        <Controller
          control={control}
          name={FormField.FIRST_NAME}
          render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
            <InputText
              label={t('firstName')}
              inputRef={ref}
              name={name}
              value={value || ''}
              error={error?.message}
              onChange={onChange}
              placeholder={t('firstName')}
            />
          )}
        />
      </div>
      <div className="input-element-container">
        <Controller
          control={control}
          name={FormField.LAST_NAME}
          render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
            <InputText
              label={t('lastName')}
              inputRef={ref}
              name={name}
              value={value || ''}
              error={error?.message}
              onChange={onChange}
              placeholder={t('lastName')}
            />
          )}
        />
      </div>
      <div className="input-element-container">
        <Controller
          control={control}
          name={FormField.PHONE_NUMBER}
          render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
            <InputText
              label={t('phoneNumber')}
              inputRef={ref}
              name={name}
              value={value || ''}
              error={error?.message}
              onChange={onChange}
              placeholder={t('phoneNumber')}
            />
          )}
        />
      </div>
      <div className="input-element-container">
        <Controller
          control={control}
          name={FormField.PROFESSION}
          render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
            <InputText
              label={t('profession')}
              inputRef={ref}
              name={name}
              value={value || ''}
              error={error?.message}
              onChange={onChange}
              placeholder={t('profession')}
            />
          )}
        />
      </div>
      <div className="input-element-container">
        <Controller
          control={control}
          name={FormField.BIRTHDAY_DATE}
          render={({ field: { name, value, ref } }) => (
            <InputDatePicker
              label={t('birthdayDate')}
              inputRef={ref}
              value={value ? dayjs(value) : undefined}
              name={name}
              onChange={(dateObject) => {
                setValue(name, dateObject?.format(dateTimeFormats.backendDate));
              }}
              placeholder={t('birthdayDate')}
              format={dateTimeFormats.albanianDate}
              maxDate={dayjs()}
            />
          )}
        />
      </div>
      <div className="button-group-container">
        <Button
          type="primary"
          text={i18n.t('globalStrings.submit')}
          htmlType="submit"
          loading={isPending}
          style={{ marginTop: '20px' }}
        />
        <Button
          type="primary"
          text={i18n.t('globalStrings.cancel')}
          onClick={toggleEditMode}
          style={{ marginTop: '20px' }}
        />
      </div>
    </form>
  );
};

export default PersonalInfoEditForm;
