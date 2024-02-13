import { Spin } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useConfirmUser from 'src/api/users/hooks/useConfirmUser';
import Button from 'src/components/common/Button/Button';
import ResultComponent from 'src/components/common/ResultComponent/ResultComponent';
import { Route } from 'src/router/enums';

const ConfirmUser: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'auth.confirmUser' });
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const id = searchParams.get('id');
  const verificationCode = searchParams.get('verificationCode');

  const {
    data: user,
    isFetching: isConfirmingUser,
    isFetched: executedConfirmation,
    error,
  } = useConfirmUser({
    id,
    verificationCode,
  });

  const pageContent = error ? (
    <ResultComponent
      title={t('errorTitle')}
      subTitle={t('errorSubTitle', { firstName: user?.firstName })}
      status="error"
      className="confirm-user-result-component"
      extra={
        <Button
          type="default"
          text={t('backToLogin')}
          onClick={() => navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true })}
        />
      }
    />
  ) : (
    <ResultComponent
      title={t('successTitle')}
      subTitle={t('successSubTitle', { firstName: user?.firstName })}
      status="success"
      className="confirm-user-result-component"
      extra={
        <Button
          type="primary"
          text={t('sendMeToLogin')}
          onClick={() => navigate(`${Route.ACCESS}/${Route.LOGIN}`, { replace: true })}
        />
      }
    />
  );

  return (
    <Spin
      spinning={isConfirmingUser}
      tip={t('confirming')}
      wrapperClassName="confirm-user-container"
    >
      {executedConfirmation && pageContent}
    </Spin>
  );
};

export default ConfirmUser;
