import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import useLogIn from 'src/api/auth/hooks/useLogin';
import Button from 'src/components/common/Button/Button';
import InputCheckbox from 'src/components/common/InputCheckbox/InputCheckbox';
import InputText from 'src/components/common/InputText/InputText';
import { Route } from 'src/router/enums';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

const LoginForm: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.login' });

  const [showPassword, setShowPassword] = useState(false);

  const { mutate: logIn, isPending } = useLogIn();

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((values) => logIn(values));

  return (
    <form
      className="login-form"
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
            prefix={<UserOutlined />}
            placeholder={t('emailPlaceholder')}
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
            prefix={<LockOutlined />}
            placeholder={t('passwordPlaceholder')}
            textVisible={showPassword}
            type="password"
          />
        )}
      />
      <div className="remember-me-and-forgot-password">
        <InputCheckbox
          name={FormField.SHOW_PASSWORD}
          label={t('showPassword')}
          checked={showPassword}
          onChange={() => setShowPassword((current) => !current)}
        />
        <Typography.Text>
          <Link
            className="login-form-forgot-password"
            to={`${Route.ACCESS}/${Route.FORGOT_PASSWORD}`}
          >
            {t('forgotPassword')}
          </Link>
        </Typography.Text>
      </div>
      <div className="submit-button-group">
        <Button
          type="primary"
          text={t('submit')}
          htmlType="submit"
          className="login-form-button"
          loading={isPending}
        />
        <Typography.Paragraph style={{ margin: 0 }}>
          {`${t('newToPlatform')} `}
          <Typography.Text>
            <Link to={`${Route.ACCESS}/${Route.SIGNUP}`}>{t('signUp')}</Link>
          </Typography.Text>
        </Typography.Paragraph>
      </div>
    </form>
  );
};

export default LoginForm;
