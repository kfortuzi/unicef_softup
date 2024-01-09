// TODO: Implement submit logic for google login

/* eslint-disable */
import { GoogleLogin, GoogleLoginProps } from '@react-oauth/google';

const LoginWithGoogle: React.FC = () => {
  const responseMessage: GoogleLoginProps['onSuccess'] = (response) => {
    console.log(response);
  };

  const errorMessage: GoogleLoginProps['onError'] = () => {};

  return (
    <GoogleLogin
      onSuccess={responseMessage}
      onError={errorMessage}
    />
  );
};

export default LoginWithGoogle;
