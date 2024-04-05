import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import usePostJobTipsAndAdvices from 'src/api/jobs/hooks/usePostJobTipsAndAdvices';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';

const InterviewTips: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'interviewTips' });
  const { id } = useParams();

  const { mutate: postJobTipsAndAdvices, data, isPending } = usePostJobTipsAndAdvices(id);

  useEffect(() => {
    postJobTipsAndAdvices({ id });
  }, [postJobTipsAndAdvices, id]);

  if (isPending) {
    return <LoadingFullPage />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1 style={{ alignSelf: 'center' }}>{t('header')}</h1>
      <h3>{t('tips')}</h3>
      <p>{data?.tips}</p>
      <h3>{t('interviewQuestions')}</h3>
      <p>{data?.interviewQuestions}</p>
    </div>
  );
};

export default InterviewTips;
