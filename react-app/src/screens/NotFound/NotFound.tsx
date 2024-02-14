import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from 'src/components/common/Button/Button';
import ResultComponent from 'src/components/common/ResultComponent/ResultComponent';
import { Route } from 'src/router/enums';

const NotFound: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'notFound' });
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <ResultComponent
        title={t('title')}
        subTitle={t('subTitle')}
        status="404"
        className="not-found-result-component"
        extra={
          <Button
            type="primary"
            text={t('goBack')}
            onClick={() => navigate(`${Route.ROOT}${Route.YOUTH_CAREER_ORIENTATION}`, { replace: true })}
          />
        }
      />
    </div>
  );
};

export default NotFound;
