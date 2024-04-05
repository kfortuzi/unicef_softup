import { Col, Row, Typography } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useGetJobs from 'src/api/jobs/hooks/useGetJobs';
import useGetRecommendedJobs from 'src/api/jobs/hooks/useGetRecommendedJobs';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import Button from 'src/components/common/Button/Button';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import JobCard from 'src/components/jobs/JobCard/JobCard';

const Jobs: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });
  const [cursor, setCursor] = useState('');
  const { data: jobs, isFetching } = useGetJobs({ take: 20, cursor });
  let { data: recommendedJobs } = useGetRecommendedJobs();
  const { data: resumes } = useGetResumes();
  const appliedJobs = jobs?.filter((job) => resumes?.some((resume) => resume.referenceId === job.id));

  if ((recommendedJobs?.length ?? 0) < 1) {
    recommendedJobs = jobs?.slice(0, 3);
  }

  if (isFetching) {
    return <LoadingFullPage />;
  }

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <Typography.Title className="title">{t('header')}</Typography.Title>
      </div>
      <h2 className="category">{t('appliedJobs')}</h2>
      <Row
        className="list-of-jobs recommended-jobs"
        gutter={[32, 32]}
      >
        {appliedJobs?.map(
          (job) =>
            job && (
              <Col
                className="col-job-card"
                xxl={8}
                xl={12}
                lg={24}
                md={24}
                sm={24}
                xs={24}
              >
                <JobCard
                  key={'applied-' + job.id}
                  jobId={job.id}
                  referenceId={job.referenceId}
                  title={job.title}
                  description={job.description}
                  companyName={job.company}
                  location={job.location}
                  resume={resumes?.find((resume) => resume.referenceId === job.id)}
                />
              </Col>
            ),
        )}
      </Row>
      <h2 className="category">{t('recommendedJobs')}</h2>
      <Row
        className="list-of-jobs recommended-jobs"
        gutter={[32, 32]}
      >
        {recommendedJobs?.map((job) => (
          <Col
            className="col-job-card"
            xxl={8}
            xl={12}
            lg={24}
            md={24}
            sm={24}
            xs={24}
          >
            <JobCard
              key={'recommended-' + job.id}
              jobId={job.id}
              referenceId={job.referenceId}
              title={job.title}
              description={job.description}
              companyName={job.company}
              location={job.location}
            />
          </Col>
        ))}
      </Row>
      <h2 className="category">{t('allJobs')}</h2>
      <Row
        className="list-of-jobs"
        gutter={[32, 32]}
      >
        {jobs?.map((job) => (
          <Col
            className="col-job-card"
            xxl={8}
            xl={12}
            lg={24}
            md={24}
            sm={24}
            xs={24}
          >
            <JobCard
              key={'all-jobs-' + job.id}
              jobId={job.id}
              referenceId={job.referenceId}
              title={job.title}
              description={job.description}
              companyName={job.company}
              location={job.location}
            />
          </Col>
        ))}
      </Row>
      <Button
        className="load-more-button"
        onClick={() => setCursor(jobs?.slice(-1)[0].id || '')}
        size="large"
        text={t('loadMoreButtonText')}
        type="primary"
      />
    </div>
  );
};

export default Jobs;
