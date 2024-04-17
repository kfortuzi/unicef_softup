import { DownloadOutlined } from "@ant-design/icons";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Modal, Tooltip } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import usePostCoverLetterForJob from "src/api/coverLetters/hooks/usePostCoverLetterForJob";
import { GetCoverLetterResponse } from "src/api/coverLetters/types";
import usePostResumeForJob from "src/api/resumes/hooks/usePostResumeForJob";
import { GetResumeResponse } from "src/api/resumes/types";
import useGetProfile from "src/api/users/hooks/useGetProfile";
import Button from "src/components/common/Button/Button";
import CoverLetterPdfView from "src/components/coverLetter/CoverLetterPdfView/CoverLetterPdfView";
import ResumePdfView from "src/components/profile/myResume/ResumePdfView/ResumePdfView";

type JobApplyModalProps = {
  jobId?: string;
  companyName?: string;
  resume?: GetResumeResponse;
  coverLetter?: GetCoverLetterResponse;
  referenceId?: string;
};

const JobApplyModal: React.FC<JobApplyModalProps> = ({
  jobId,
  companyName,
  resume,
  coverLetter,
  referenceId,
}) => {

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
        footer={[
          <Button
            key="back"
            type="link"
            text={t('cancelButtonText')}
            onClick={handleCancel}
          />,
          <Tooltip
            title={
              !resume || !coverLetter ? t('applyButtonDisabledTooltip') : ''}
            showArrow={true}
            placement={'top'
            }
          >
            <Button
              key="submit"
              type="primary"
              text={t('applyButtonText')}
              onClick={handleApply}
              disabled={!resume || !coverLetter}
            />
          </Tooltip>
        ]}
      >
        {resume ? (
          <PDFDownloadLink
            document={<ResumePdfView resume={resume} />}
            fileName={`${resume?.firstName}-${companyName}.pdf`}
          >
            <div className='generated-info-group'>
              <Button
                text={t('viewResumeButtonText')}
                type='link'
                onClick={() => navigate(`/resumes/${resume?.id}`)}
              />
              <Button
                type="primary"
                text=''
                icon={<DownloadOutlined />}
                size="middle"
              />
            </div>
          </PDFDownloadLink>
        ) : (
          <Button
            type="link"
            text={t('tailorResumeButtonText')}
            onClick={() => postResumeForJob({ jobId })}
            loading={isResumePending}
            className='generate-button'
          />
        )}
        {coverLetter ? (
          <PDFDownloadLink
            document={<CoverLetterPdfView coverLetter={coverLetter} user={user} />}
            fileName={`${coverLetter?.to} - ${coverLetter?.company}.pdf`}
          >
            <div className='generated-info-group'>
              <Button
                text={t('viewCoverLetterButtonText')}
                type='link'
                onClick={() => navigate(`/cover-letters/${coverLetter?.id}`)}
              />
              <Button
                type="primary"
                text=''
                icon={<DownloadOutlined />}
                size="middle"
              />
            </div>
          </PDFDownloadLink>
        ) : (
          <Button
            type="link"
            text={t('generateCoverLetterButtonText')}
            onClick={() => postCoverLetterForJob({ jobId })}
            loading={isCoverLetterPending}
            className='generate-button'
          />
        )}
      </Modal>
      <Button
        type="primary"
        onClick={showModal}
        text={t('applyButtonText')}
        size="middle"
      />
    </div>
  );
}

export default JobApplyModal;