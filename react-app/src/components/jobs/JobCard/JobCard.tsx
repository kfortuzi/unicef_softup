import { BankOutlined, EnvironmentOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import { GetResumeResponse } from 'src/api/resumes/types';

import JobInterviewTipsModal from '../InterviewTipsModal/InterviewTipsModal';
import JobApplyModal from '../JobApplyModal/JobApplyModal';

type JobCardProps = {
  jobId: string;
  referenceId: string;
  title: string;
  description?: string;
  companyName: string;
  location: string;
  resume?: GetResumeResponse;
  coverLetter?: GetCoverLetterResponse;
};

const JobCard: React.FC<JobCardProps> = ({
  jobId,
  title,
  description,
  companyName,
  location,
  referenceId,
  resume,
  coverLetter,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });

  return (
    <div className="job-card-container">
      <Card className="job-card-body">
        <div className="metadata">
          <div>
            <h3 className="position">{title}</h3>
            {description && (
              <p className="job-description-group">
                <FileSearchOutlined />
                <span className="job-description">{description}</span>
              </p>
            )}
            <p className="job-description-group">
              <BankOutlined />
              <span className="job-description">{companyName}</span>
            </p>
            <p className="job-description-group">
              <EnvironmentOutlined />
              <span className="job-description">{location}</span>
            </p>
          </div>
          <div className="actions-container">
            <Link
              className="view-details-link"
              to={`/jobs/${jobId}`}
            >
              {t('viewDetails')}
            </Link>
            <div className="apply-and-tips-buttons-container">
              <JobApplyModal
                jobId={jobId}
                companyName={companyName}
                title={title}
                resume={resume}
                coverLetter={coverLetter}
                referenceId={referenceId}
              />
              <JobInterviewTipsModal jobId={jobId} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
