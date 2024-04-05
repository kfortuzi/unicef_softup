import { Card, Image } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import useDeleteResume from 'src/api/resumes/hooks/useDeleteCoverLetter';
import { GetResumeResponse } from 'src/api/resumes/types';
import Resume from 'src/assets/images/resume.webp';
import Button from 'src/components/common/Button/Button';
import dateTimeFormats from 'src/constants/dateTimeFormats';

type ResumeCardProps = {
  resume: GetResumeResponse;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ resume }) => {
  const { referenceId, firstName, lastName } = resume;

  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });
  const navigate = useNavigate();
  const { mutate: deleteResume } = useDeleteResume();

  return (
    <div className="resume-card-container">
      <Card
        cover={
          <Image
            alt="example"
            src={Resume}
            preview={false}
            height={160}
            style={{ objectFit: 'cover' }}
          />
        }
        bordered={false}
        className="resume-card-body"
      >
        <div className="metadata">
          <h3 className="name">
            {firstName} {lastName}
          </h3>
          <p className="last-updated">
            {t('lastUpdated')}: {dayjs(resume.updatedAt).format(dateTimeFormats.albanianDate)}
          </p>
        </div>
        <div>
          <Link
            className="tips"
            to={`/jobs/${referenceId}/interview-tips`}
          >
            {t('interviewTips')}
          </Link>
        </div>
        <div className="actions">
          <Button
            type="link"
            className="edit"
            text={t('edit')}
            size="small"
            onClick={() => navigate(`/resumes/${resume.id}`)}
          />

          <Button
            type="primary"
            text={t('delete')}
            size="small"
            onClick={() => deleteResume({ id: resume.id })}
          />
        </div>
      </Card>
    </div>
  );
};

export default ResumeCard;
