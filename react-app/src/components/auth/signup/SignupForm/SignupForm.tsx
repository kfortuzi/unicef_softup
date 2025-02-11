import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Typography } from 'antd';
import React, { useState } from 'react';
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

  const [showPassword, setShowPassword] = useState(false);

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
        name={FormField.FIRST_NAME}
        render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
          <InputText
            inputRef={ref}
            name={name}
            value={value}
            error={error?.message}
            onChange={onChange}
            placeholder={t('firstNamePlaceholder')}
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
            placeholder={t('lastNamePlaceholder')}
          />
        )}
      />
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
            placeholder={t('passwordPlaceholder')}
            textVisible={showPassword}
            type="password"
            suffix={showPassword
              ? <EyeOutlined onClick={() => setShowPassword(false)} />
              : <EyeInvisibleOutlined onClick={() => setShowPassword(true)} />}
          />
        )}
      />
      <div className="password-rules-and-show-password">
        <Typography.Text>{t('passwordRules')}</Typography.Text>
      </div>
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
