import { BankOutlined, EnvironmentOutlined, FileSearchOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Card, Dropdown, Image, MenuProps, Modal } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import usePostCoverLetterForJob from 'src/api/coverLetters/hooks/usePostCoverLetterForJob';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import usePostResumeForJob from 'src/api/resumes/hooks/usePostResumeForJob';
import { GetResumeResponse } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import ResumePdfView from 'src/components/profile/myResume/ResumePdfView/ResumePdfView';

type JobCardProps = {
  jobId: string;
  referenceId: string;
  title: string;
  description?: string;
  companyName: string;
  location: string;
  resume?: GetResumeResponse;
};

const JobCard: React.FC<JobCardProps> = ({
  jobId,
  title,
  description,
  companyName,
  location,
  referenceId,
  resume,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });
  const navigate = useNavigate();

  const openInAkpa = (referenceId: string) => {
    const win = window.open(`https://www.puna.gov.al/job/${referenceId}`, '_blank');
    if (win) {
      win.focus();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleApply = () => {
    openInAkpa(referenceId);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
    data: generatedResume,
  } = usePostResumeForJob();

  const { refetch: refetchResumes } = useGetResumes();
  if (isCoverLetterSuccess) {
    navigate(`/cover-letters/${coverLetter?.id}`);
  }

  if (isResumeSuccess) {
    refetchResumes();
    navigate(`/resumes/${generatedResume?.id}`);
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
              <Modal
                title={t('applyModalTitle')}
                open={isModalOpen}
                onOk={handleApply}
                onCancel={handleCancel}
                okText={t('applyButtonText')}
                cancelText={t('cancelButtonText')}
              >
                {resume ? (
                  <PDFDownloadLink
                    document={<ResumePdfView resume={resume} />}
                    fileName="somename.pdf"
                  >
                    <Button
                      type="primary"
                      text={t('downloadPdfButtonText')}
                      size="middle"
                    />
                  </PDFDownloadLink>
                ) : (
                  <p>{t('pleaseGenerateACv')}</p>
                )}
              </Modal>
              <Button
                type="link"
                className="apply"
                onClick={showModal}
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
