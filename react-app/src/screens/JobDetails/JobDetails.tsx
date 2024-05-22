import { Typography } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetCoverLetters from 'src/api/coverLetters/hooks/useGetCoverLetters';
import useGetJob from 'src/api/jobs/hooks/useGetJob';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import JobInterviewTipsModal from 'src/components/jobs/InterviewTipsModal/InterviewTipsModal';
import JobApplyModal from 'src/components/jobs/JobApplyModal/JobApplyModal';
import dateTimeFormats from 'src/constants/dateTimeFormats';

const JobDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation('translation', { keyPrefix: 'jobDetails' });
  const { data: job, isFetched: isJobFetched } = useGetJob({ id });
  const { data: resumes, isFetched: isResumesFetched } = useGetResumes();
  const { data: coverLetters, isFetched: isCoverLettersFetched } = useGetCoverLetters();
  const resume = resumes?.find((resume) => resume.referenceId === job?.id);
  const coverLetter = coverLetters?.find((coverLetter) => coverLetter.referenceId === job?.id);
  const { Text, Title } = Typography;

  if (isResumesFetched && isJobFetched && isCoverLettersFetched) {
    return (
      <div className="job-details-container">
        <Title level={3}>{job?.title}</Title>
        <div className="job-main-details">
          <Text>
            <span className="data-name">{t('company')}: </span> {job?.company}
          </Text>
          <Text>
            <span className="data-name">{t('location')}: </span> {job?.location}
          </Text>
          <Text>
            <span className="data-name">{t('address')}: </span> {job?.address}
          </Text>
          <Text>
            <span className="data-name">{t('vacantPositions')}: </span>
            {job?.vacantPositions}
          </Text>
          <Text>
            <span className="data-name">{t('dateStart')}: </span>
            {job?.dateStart && dayjs(job?.dateStart).format(dateTimeFormats.albanianDate)}
          </Text>
          <Text>
            <span className="data-name">{t('dateEnd')}: </span>
            {job?.dateEnd && dayjs(job?.dateEnd).format(dateTimeFormats.albanianDate)}
          </Text>
        </div>
        <hr className="divider" />
        <div className="job-details">
          <div className="job-description">
            <Title level={4}>{t('description')}</Title>
            <Text>{job?.description}</Text>
          </div>
          <div className="job-skillLines">
            <Title level={4}>{t('skillLines')}</Title>
            <Text>{job?.skillLines}</Text>
          </div>
          <div className="job-experience">
            <Title level={4}>{t('experience')}</Title>
            <Text>{job?.experience}</Text>
          </div>
        </div>
        <div className="job-detail-buttons">
          <JobApplyModal
            jobId={job?.id}
            companyName={job?.company}
            referenceId={job?.referenceId}
            resume={resume}
            title={job?.title}
            coverLetter={coverLetter}
          />
          {job?.id ? <JobInterviewTipsModal jobId={job.id} /> : null}
        </div>
      </div>
    );
  }
};

export default JobDetails;
