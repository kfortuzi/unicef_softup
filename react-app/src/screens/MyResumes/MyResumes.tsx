import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ResumeCard from 'src/components/resume/ResumeCard/ResumeCard';

const MyResumes: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });

  return (
    <div className="resumes-container">
      <Typography.Title className="title">{t('header')}</Typography.Title>
      <Row
        className="list-of-resumes"
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
              <ResumeCard />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MyResumes;
