import React from 'react';
import { useTranslation } from 'react-i18next';

import CoverLetterView from 'src/components/coverLetter/CoverLetterView/CoverLetterView';

const MyCoverLetter: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1 style={{ alignSelf: 'center' }}>{t('header')}</h1>
      <CoverLetterView />
    </div>
  );
};

export default MyCoverLetter;
