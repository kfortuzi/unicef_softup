import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchUser from 'src/api/users/hooks/usePatchUser';
import Button from 'src/components/common/Button/Button';
import InputCheckbox from 'src/components/common/InputCheckbox/InputCheckbox';
import InputText from 'src/components/common/InputText/InputText';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

const ChangeResetPasswordForm: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.resetPassword' });

  const [showPassword, setShowPassword] = useState(false);

  const { mutate: patchUser, isPending } = usePatchUser();

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((values) =>
    patchUser({
      oldPassword: values[FormField.CURRENT_PASSWORD],
      newPassword: values[FormField.NEW_PASSWORD],
    }),
  );

  return (
    <form
      className="change-password-form"
      onSubmit={submitForm}
    >
      <Controller
        control={control}
        name={FormField.CURRENT_PASSWORD}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder={t('currentPasswordLabel')}
            type="password"
            textVisible={showPassword}
          />
        )}
      />
      <Controller
        control={control}
        name={FormField.NEW_PASSWORD}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder={t('newPasswordLabel')}
            type="password"
            textVisible={showPassword}
          />
        )}
      />
      <Controller
        control={control}
        name={FormField.CONFIRM_NEW_PASSWORD}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder={t('confirmPasswordLabel')}
            type="password"
            textVisible={showPassword}
          />
        )}
      />
      <div className="show-password-checkbox">
        <InputCheckbox
          name={FormField.SHOW_PASSWORD}
          label={t('showPassword')}
          checked={showPassword}
          onChange={() => setShowPassword((current) => !current)}
        />
      </div>
      <div className="submit-button-group">
        <Button
          type="primary"
          htmlType="submit"
          text={t('submit')}
          className="change-password-form-button"
          loading={isPending}
        />
      </div>
    </form>
  );
};

export default ChangeResetPasswordForm;
