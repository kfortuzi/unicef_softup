import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CoverLetterCard from 'src/components/coverLetter/CoverLetterCard/CoverLetterCard';

const MyCoverLetters: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myCoverLetters' });

  return (
    <div className="my-cover-letters-container">
      <div className="my-cover-letters-header">
        <Typography.Title className="title">{t('header')}</Typography.Title>
      </div>
      <div className="list-of-cover-letters">
        <h2 className="category">{t('aiGenerated')}</h2>
        <div className="cover-letters-for-category ai-generated">
          <CoverLetterCard />
          <CoverLetterCard />
          <CoverLetterCard />
        </div>
        <h2 className="category">{t('userGenerated')}</h2>
        <div className="cover-letters-for-category user-generated">
          <CoverLetterCard />
          <CoverLetterCard />
        </div>
      </div>
    </div>
  );
};

export default MyCoverLetters;
