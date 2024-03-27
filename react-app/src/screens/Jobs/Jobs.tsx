import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import JobCard from 'src/components/jobs/JobCard/JobCard';

const Jobs: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <Typography.Title className="title">{t('header')}</Typography.Title>
      </div>
      <h2 className="category">{t('recommendedJobs')}</h2>
      <Row
        className="list-of-jobs recommended-jobs"
        gutter={[32, 32]}
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Col
              className="col-job-card"
              key={index}
              xxl={8}
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
            >
              <JobCard
                jobId={62283}
                position="ReactJs Developer"
                description="We are looking for a ReactJs Developer to join our team"
                companyName="Google"
                location="Remote"
              />
            </Col>
          ))}
      </Row>
      <h2 className="category">{t('allJobs')}</h2>
      <Row
        className="list-of-jobs"
        gutter={[32, 32]}
      >
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Col
              key={index}
              className="col-job-card"
              xxl={8}
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
            >
              <JobCard
                jobId={62283}
                position="ReactJs Developer"
                description="We are looking for a ReactJs Developer to join our team"
                companyName="Google"
                location="Remote"
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Jobs;
