import { Col, Empty, Row, Spin } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useGetCoverLetters from 'src/api/coverLetters/hooks/useGetCoverLetters';
import useGetJobs from 'src/api/jobs/hooks/useGetJobs';
import useGetRecommendedJobs from 'src/api/jobs/hooks/useGetRecommendedJobs';
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

  return (
    <div className="jobs-container">
      <h2 className="category">{t('recommendedJobs')}</h2>

      {recommendedJobs && recommendedJobs.length > 0 ? (
        <Row
          className="list-of-jobs recommended-jobs"
          gutter={[32, 32]}
          key={'recommended-jobs'}
        >
          {recommendedJobs.map((job) => (
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
                resume={resumes?.find((resume) => resume.referenceId === job.id)}
                coverLetter={coverLetters?.find((coverLetter) => coverLetter.referenceId === job.id)}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty
          className="empty-text"
          description={t('noRecommendedJobs')}
        />
      )}
      <hr className="header-divider" />
      <h2 className="category">
        {t('allJobs')}
        <Search
          placeholder={t('searchPlaceholder')}
          type="search"
          name="filter"
          onSearch={(value) => {
            setFilterValue(value);
          }}
          loading={isFetching}
          disabled={isFetching}
          className="jobs-search-input"
          size="large"
        />
      </h2>
      {allJobs && allJobs.pages.flat().length > 0 ? (
        <Row
          className="list-of-jobs"
          gutter={[32, 32]}
          key={'all-jobs'}
        >
          <Spin
            spinning={isFetching}
            size="large"
          />
          {allJobs?.pages.map((page) =>
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
                  resume={resumes?.find((resume) => resume.referenceId === job.id)}
                  coverLetter={coverLetters?.find((coverLetter) => coverLetter.referenceId === job.id)}
                />
              </Col>
            )),
          )}
        </Row>
      ) : (
        <Empty
          className="empty-text"
          description={t('noAppliedJobs')}
        />
      )}
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
