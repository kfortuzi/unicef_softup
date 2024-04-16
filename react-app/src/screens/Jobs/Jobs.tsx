import { Col, Row, Spin, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useGetCoverLetters from 'src/api/coverLetters/hooks/useGetCoverLetters';
import useGetJobs from 'src/api/jobs/hooks/useGetJobs';
import useGetRecommendedJobs from 'src/api/jobs/hooks/useGetRecommendedJobs';
import { GetJobsResponse } from 'src/api/jobs/types';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import Button from 'src/components/common/Button/Button';
import JobCard from 'src/components/jobs/JobCard/JobCard';

const Jobs: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });
  const [filterValue, setFilterValue] = useState<string>('');
  const {
    data: allJobs,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useGetJobs({ take: 20, cursor: '', filter: filterValue });

  const { data: recommendedJobs } = useGetRecommendedJobs();
  const { data: resumes } = useGetResumes();
  const { data: coverLetters } = useGetCoverLetters();
  const appliedJobs = allJobs?.pages?.flatMap((page) =>
    page?.filter((job) => resumes?.some((resume) => resume.referenceId === job?.id)),
  ) as GetJobsResponse;

  return (
    <div className="jobs-container">
      <div className="jobs-header">
        <Typography.Title className="title">{t('header')}</Typography.Title>
      </div>
      <h2 className="category">{t('appliedJobs')}</h2>
      <Row
        className="list-of-jobs recommended-jobs"
        gutter={[32, 32]}
        key={'applied-jobs'}
      >
        {appliedJobs && appliedJobs.length > 0 ? (
          appliedJobs.map(
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
                  key={'applied-' + job.id}
                >
                  <JobCard
                    jobId={job.id}
                    referenceId={job.referenceId}
                    title={job.title}
                    description={job.description}
                    companyName={job.company}
                    location={job.location}
                    resume={resumes?.find((resume) => resume.referenceId === job.id)}
                    coverLetter={coverLetters?.find((coverLetter) => coverLetter.referenceId === job.id)}
                  />
                </Col>
              ),
          )
        ) : (
          <p>{t('noAppliedJobs')}</p>
        )}
      </Row>
      <hr className='header-divider' />
      <h2 className="category">{t('recommendedJobs')}</h2>
      <Row
        className="list-of-jobs recommended-jobs"
        gutter={[32, 32]}
        key={'recommended-jobs'}
      >
        {recommendedJobs && recommendedJobs.length > 0 ? (
          recommendedJobs.map((job) => (
            <Col
              className="col-job-card"
              xxl={8}
              xl={12}
              lg={24}
              md={24}
              sm={24}
              xs={24}
              key={'recommended-' + job.id}
            >
              <JobCard
                jobId={job.id}
                referenceId={job.referenceId}
                title={job.title}
                description={job.description}
                companyName={job.company}
                location={job.location}
              />
            </Col>
          ))
        ) : (
          <p>{t('noRecommendedJobs')}</p>
        )}
      </Row>
      <hr className='header-divider' />
      <h2 className="category">{t('allJobs')}
        <Search
          placeholder={t('searchPlaceholder')}
          type='search'
          name='filter'
          onSearch={(value) => {
            setFilterValue(value);
          }}
          loading={isFetching}
          disabled={isFetching}
          className='jobs-search-input'
          size='large'
        />
      </h2>
      <Row
        className="list-of-jobs"
        gutter={[32, 32]}
        key={'all-jobs'}
      >
        <Spin spinning={isFetching} size='large' />
        {
          allJobs && allJobs.pages.flat().length > 0 ? (
            allJobs?.pages.map((page) =>
              page?.map((job) => (
                <Col
                  className="col-job-card"
                  xxl={8}
                  xl={12}
                  lg={24}
                  md={24}
                  sm={24}
                  xs={24}
                  key={'all-jobs-' + Math.random()}
                >
                  <JobCard
                    jobId={job.id}
                    referenceId={job.referenceId}
                    title={job.title}
                    description={job.description}
                    companyName={job.company}
                    location={job.location}
                  />
                </Col>
              )))) : (
            <p>{t('noRecommendedJobs')}</p>
          )}
      </Row>
      {!filterValue ? (
        <Button
          className="load-more-button"
          onClick={() => hasNextPage && !isFetchingNextPage && fetchNextPage()}
          size="large"
          text={t('loadMoreButtonText')}
          type="primary"
          loading={isFetchingNextPage}
        />
      ) : null}
    </div>
  );
};

export default Jobs;
