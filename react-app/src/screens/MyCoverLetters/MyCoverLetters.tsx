import { Col, Row, Typography } from 'antd';
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
      <h2 className="category">{t('aiGenerated')}</h2>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <Col
              key={index}
              className="gutter-row"
              span={4}
            >
              <CoverLetterCard />
            </Col>
          ))}
      </Row>
      <h2 className="category">{t('userGenerated')}</h2>
      <Row
        className="list-of-cover-letters"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Col
              key={index}
              className="gutter-row"
              span={4}
            >
              <CoverLetterCard />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MyCoverLetters;
