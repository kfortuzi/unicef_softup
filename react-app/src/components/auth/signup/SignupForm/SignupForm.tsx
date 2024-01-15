import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Typography } from 'antd';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import useSignUp from 'src/api/users/hooks/useSignUp';
import Button from 'src/components/common/Button/Button';
import InputText from 'src/components/common/InputText/InputText';
import { Route } from 'src/router/enums';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

const SignupForm: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.signUp' });

  const { mutate: signUp, isPending, isSuccess } = useSignUp();

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((values) => signUp(values));

  return (
    <form
      className="signup-form"
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
            label={t('emailLabel')}
          />
        )}
      />
      <Controller
        control={control}
        name={FormField.FIRST_NAME}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            label={t('firstNameLabel')}
          />
        )}
      />
      <Controller
        control={control}
        name={FormField.LAST_NAME}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            label={t('lastNameLabel')}
          />
        )}
      />
      <Controller
        control={control}
        name={FormField.PASSWORD}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            label={t('passwordLabel')}
            type="password"
          />
        )}
      />
      <Controller
        control={control}
        name={FormField.CONFIRM_PASSWORD}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            label={t('confirmPasswordLabel')}
            type="password"
          />
        )}
      />
      <div className="submit-button-group">
        {isSuccess && (
          <Alert
            className="signup-form-alert"
            message={t('signUpSuccess')}
            description={t('signUpSuccessInfo')}
            type="success"
            showIcon
          />
        )}
        <Button
          type="primary"
          text={t('submit')}
          htmlType="submit"
          className="signup-form-button"
          loading={isPending}
        />
        <Typography.Paragraph style={{ margin: 0 }}>
          {`${t('alreadyMember')} `}
          <Typography.Text>
            <Link to={`${Route.ACCESS}/${Route.LOGIN}`}>{t('logIn')}</Link>
          </Typography.Text>
        </Typography.Paragraph>
      </div>
    </form>
  );
};

export default SignupForm;
