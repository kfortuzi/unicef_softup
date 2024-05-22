import { DownloadOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Modal, Popconfirm, Tooltip } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import usePostCoverLetterForJob from 'src/api/coverLetters/hooks/usePostCoverLetterForJob';
import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import usePostResumeForJob from 'src/api/resumes/hooks/usePostResumeForJob';
import { GetResumeResponse } from 'src/api/resumes/types';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import Button from 'src/components/common/Button/Button';
import CoverLetterPdfView from 'src/components/coverLetter/CoverLetterPdfView/CoverLetterPdfView';
import ResumePdfView from 'src/components/profile/myResume/ResumePdfView/ResumePdfView';

type JobApplyModalProps = {
  jobId?: string;
  companyName?: string;
  resume?: GetResumeResponse;
  coverLetter?: GetCoverLetterResponse;
  referenceId?: string;
  title?: string;
};

const JobApplyModal: React.FC<JobApplyModalProps> = ({ jobId, title, resume, coverLetter, referenceId }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });

  const openInAkpa = (referenceId?: string) => {
    const win = window.open(`https://www.puna.gov.al/job/${referenceId}`, '_blank');
    if (win) {
      win.focus();
    }
  };

  const { data: user } = useGetProfile();
  const {
    mutate: postCoverLetterForJob,
    isPending: isCoverLetterPending,
    isSuccess: isCoverLetterSuccess,
    data: generatedCoverLetter,
  } = usePostCoverLetterForJob();
  const {
    mutate: postResumeForJob,
    isPending: isResumePending,
    isSuccess: isResumeSuccess,
    data: generatedResume,
  } = usePostResumeForJob();

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

  const getFooterButtons = () => {
    if (resume && coverLetter) {
      return (
        <Button
          key={`job-apply-modal-${jobId}-apply`}
          type="primary"
          text={t('applyButtonText')}
          onClick={handleApply}
        />
      );
    }

    if (resume) {
      return (
        <Popconfirm
          title={t('applyJobPopconfirmTitle')}
          description={t('applyJobPopconfirmDescription')}
          onConfirm={handleApply}
          icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          overlayInnerStyle={{ width: '20vh' }}
          key={`job-apply-modal-${jobId}-apply-popconfirm`}
        >
          <Button
            key="submit"
            type="primary"
            text={t('applyButtonText')}
          />
        </Popconfirm>
      );
    }

    return (
      <Tooltip
        title={t('applyButtonDisabledTooltip')}
        showArrow={true}
        placement="top"
        key={`job-apply-modal-${jobId}-apply-tooltip`}
      >
        <Button
          key={`job-apply-modal-${jobId}-apply`}
          type="primary"
          text={t('applyButtonText')}
          disabled={!resume}
        />
      </Tooltip>
    );
  };

  const getResumeButtons = () => {
    if (resume) {
      return (
        <div className="generated-info-group">
          <Button
            text={t('viewResumeButtonText')}
            type="link"
            onClick={() => navigate(`/resumes/${resume?.id}`)}
          />
          <PDFDownloadLink
            document={<ResumePdfView resume={resume} />}
            fileName={`${user?.firstName}-${user?.lastName}-${title}.pdf`}
          >
            <DownloadOutlined />
          </PDFDownloadLink>
        </div>
      );
    }

    return (
      <Button
        type="link"
        text={t('tailorResumeButtonText')}
        onClick={() => postResumeForJob({ jobId })}
        loading={isResumePending}
        className="generate-button"
      />
    );
  };

  const getCoverLetterButtons = () => {
    if (coverLetter) {
      return (
        <div className="generated-info-group">
          <Button
            text={t('viewCoverLetterButtonText')}
            type="link"
            onClick={() => navigate(`/cover-letters/${coverLetter?.id}`)}
          />
          <PDFDownloadLink
            document={
              <CoverLetterPdfView
                coverLetter={coverLetter}
                user={user}
              />
            }
            fileName={`${user?.firstName}-${user?.lastName}-${title}.pdf`}
          >
            <DownloadOutlined />
          </PDFDownloadLink>
        </div>
      );
    }

    return (
      <Button
        type="link"
        text={t('generateCoverLetterButtonText')}
        onClick={() => postCoverLetterForJob({ jobId })}
        loading={isCoverLetterPending}
        className="generate-button"
      />
    );
  };

  const footerButtons = getFooterButtons();
  const coverLetterButtons = getCoverLetterButtons();
  const resumeButtons = getResumeButtons();

  if (isCoverLetterSuccess) {
    navigate(`/cover-letters/${generatedCoverLetter?.id}`);
  }

  if (isResumeSuccess) {
    navigate(`/resumes/${generatedResume?.id}`);
  }

  return (
    <div className="buttons-container">
      <Modal
        title={t('applyModalTitle')}
        open={isModalOpen}
        onOk={handleApply}
        onCancel={handleCancel}
        key={`job-apply-modal-${jobId}`}
        destroyOnClose={true}
        footer={
          <div style={{ display: 'flex' }}>
            {footerButtons}
            <Button
              key={`job-apply-modal-${jobId}-back`}
              type="default"
              style={{ marginLeft: 10 }}
              text={t('cancelButtonText')}
              onClick={handleCancel}
            />
          </div>
        }
      >
        {resumeButtons}
        {coverLetterButtons}
      </Modal>
      <Button
        type="primary"
        onClick={showModal}
        text={t('applyButtonText')}
        size="middle"
      />
    </div>
  );
};

export default JobApplyModal;
