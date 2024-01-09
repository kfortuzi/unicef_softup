import { Divider, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

import LoginForm from 'src/components/auth/login/LoginForm/LoginForm';
import LoginWithGoogle from 'src/components/auth/login/LoginWithGoogle/LoginWithGoogle';

const Login: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.login' });

  return (
    <div className="login-container">
      <Typography.Title>{t('header')}</Typography.Title>
      <LoginForm />
      <Divider className="divider">or</Divider>
      <LoginWithGoogle />
    </div>
  );
};

export default Login;
