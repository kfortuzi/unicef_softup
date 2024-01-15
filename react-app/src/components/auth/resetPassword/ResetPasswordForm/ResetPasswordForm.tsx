import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useResetPassword from 'src/api/users/hooks/useResetPassword';
import Button from 'src/components/common/Button/Button';
import InputText from 'src/components/common/InputText/InputText';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

interface Props {
  id: string;
  verificationCode: string;
}

const ResetPasswordForm: React.FC<Props> = ({ id, verificationCode }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.resetPassword' });

  const { mutate: resetPassword, isPending } = useResetPassword();

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((values) =>
    resetPassword({
      ...values,
      id,
      verificationCode,
    }),
  );

  return (
    <form
      className="reset-password-form"
      onSubmit={submitForm}
    >
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
            placeholder={t('passwordLabel')}
            type="password"
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
          />
        )}
      />
      <div className="submit-button-group">
        <Button
          type="primary"
          htmlType="submit"
          text={t('submit')}
          className="reset-password-form-button"
          loading={isPending}
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
