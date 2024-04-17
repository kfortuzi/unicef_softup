import { QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Image, Popconfirm } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import useGetJob from 'src/api/jobs/hooks/useGetJob';
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
  const { data: job } = useGetJob({ id: referenceId });

  const confirm = () => {
    deleteResume({ id: resume.id })
  };

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
            <Link to={'https://www.puna.gov.al/job/${referenceId}'} type='_blank'>{firstName} {lastName} - {job?.company}</Link>
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

          <Popconfirm
            title={t('resumeDeletePopconfirmTitle')}
            description={t('resumeDeletePopconfirmDescription')}
            onConfirm={confirm}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <Button
              type="primary"
              text={t('delete')}
              size='small'
            />
          </Popconfirm>
        </div>
      </Card>
    </div>
  );
};

export default ResumeCard;
