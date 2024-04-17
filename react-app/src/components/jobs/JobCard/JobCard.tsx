import { BankOutlined, EnvironmentOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Card, Image, } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import { GetResumeResponse } from 'src/api/resumes/types';

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
              <span>{companyName}</span>
            </p>
            <p className="job-description-group">
              <EnvironmentOutlined />
              <span>{location}</span>
            </p>
          </div>
          <div className="actions-container">
            <Link
              className="view-details-link"
              to={`/jobs/${jobId}`}
            >
              {t('viewDetails')}
            </Link>
            <JobApplyModal
              jobId={jobId}
              companyName={companyName}
              resume={resume}
              coverLetter={coverLetter}
              referenceId={referenceId}
            />
          </div>
        </div>
        <div className="logo-container">
          <Image
            preview={false}
            className="logo"
            width={40}
            src="/akpa.ico"
          />
        </div>
      </Card >
    </div >
  );
};

export default JobCard;
