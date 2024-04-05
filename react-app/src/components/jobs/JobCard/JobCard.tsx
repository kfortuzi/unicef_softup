import { BankOutlined, EnvironmentOutlined, FileSearchOutlined } from '@ant-design/icons';
import { Card, Dropdown, Image, MenuProps } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import usePostCoverLetterForJob from 'src/api/coverLetters/hooks/usePostCoverLetterForJob';
import usePostResumeForJob from 'src/api/resumes/hooks/usePostResumeForJob';
import Button from 'src/components/common/Button/Button';

type JobCardProps = {
  jobId: string;
  referenceId: number;
  title: string;
  description?: string;
  companyName: string;
  location: string;
};

const JobCard: React.FC<JobCardProps> = ({
  jobId,
  title,
  description,
  companyName,
  location,
  referenceId,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });
  const navigate = useNavigate();
  const openInAkpa = (referenceId: number) => {
    const win = window.open(`https://www.puna.gov.al/job/${referenceId}`, '_blank');
    if (win) {
      win.focus();
    }
  };

  const {
    mutate: postCoverLetterForJob,
    isPending: isCoverLetterPending,
    isSuccess: isCoverLetterSuccess,
    data: coverLetter,
  } = usePostCoverLetterForJob();
  const {
    mutate: postResumeForJob,
    isPending: isResumePending,
    isSuccess: isResumeSuccess,
    data: resume,
  } = usePostResumeForJob();
  if (isCoverLetterSuccess) {
    navigate(`/cover-letters/${coverLetter?.id}`);
  }

  if (isResumeSuccess) {
    navigate(`/resumes/${resume?.id}`);
  }

  const getPreparedItems: MenuProps['items'] = [
    {
      key: 'tailorResumeButton',
      label: (
        <Button
          type="link"
          text={t('tailorResumeButtonText')}
          onClick={() => postResumeForJob({ jobId })}
          loading={isResumePending}
        />
      ),
    },
    {
      key: 'generateCoverLetterButton',
      label: (
        <Button
          type="link"
          onClick={() => postCoverLetterForJob({ jobId })}
          loading={isCoverLetterPending}
          text={t('generateCoverLetterButtonText')}
        />
      ),
    },
  ];

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
            <div className="buttons-container">
              <Button
                type="link"
                className="apply"
                onClick={() => openInAkpa(referenceId)}
                text={t('applyButtonText')}
                size="middle"
              />

              <Dropdown menu={{ items: getPreparedItems }}>
                <Button
                  type="primary"
                  text={t('getPreparedButtonText')}
                  size="middle"
                  loading={isCoverLetterPending || isResumePending}
                />
              </Dropdown>
            </div>
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
      </Card>
    </div>
  );
};

export default JobCard;
