import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import useRequestNewPassword from 'src/api/users/hooks/useRequestNewPassword';
import Button from 'src/components/common/Button/Button';
import InputText from 'src/components/common/InputText/InputText';
import { Route } from 'src/router/enums';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

const ForgotPasswordForm: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.forgotPassword' });

  const { mutate: requestNewPassword, isPending } = useRequestNewPassword();

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((values) => requestNewPassword(values));

  return (
    <form
      className="forgot-password-form"
      onSubmit={submitForm}
    >
      <Controller
        control={control}
        name={FormField.EMAIL}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder={t('emailPlaceholder')}
          />
        )}
      />
      <div className="submit-button-group">
        <Button
          type="primary"
          text={t('submit')}
          htmlType="submit"
          className="forgot-password-form-button"
          loading={isPending}
        >
          {t('submit')}
        </Button>
        <Typography.Paragraph style={{ margin: 0 }}>
          <Typography.Text>
            <Link to={`${Route.ACCESS}/${Route.LOGIN}`}>{t('backToLogin')}</Link>
          </Typography.Text>
        </Typography.Paragraph>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
