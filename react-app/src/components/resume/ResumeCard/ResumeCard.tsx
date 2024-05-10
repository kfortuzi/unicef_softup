import { BankOutlined, EnvironmentOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Popconfirm } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import useGetJob from 'src/api/jobs/hooks/useGetJob';
import useDeleteResume from 'src/api/resumes/hooks/useDeleteCoverLetter';
import { GetResumeResponse } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import { Route } from 'src/router/enums';

type ResumeCardProps = {
  resume: GetResumeResponse;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ resume }) => {
  const { referenceId } = resume;

  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });
  const navigate = useNavigate();
  const { mutate: deleteResume } = useDeleteResume();
  const { data: job } = useGetJob({ id: referenceId });

  const confirm = () => {
    deleteResume({ id: resume.id });
  };

  return (
    <div className="resume-card-container">
      <Card
        bordered={false}
        className="resume-card-body"
      >
        <div className="metadata">
          <Link
            to={`${Route.JOBS}/${job?.id}`}
            type="_blank"
            className="position"
          >
            {job?.title}
          </Link>

          <div className="description-group">
            <BankOutlined />
            <h4 className="description">{job?.company}</h4>
          </div>

          <div className="description-group">
            <EnvironmentOutlined />
            <span className="description">{job?.location}</span>
          </div>
        </div>

        <div className="actions-wrapper">
          <Link
            className="tips"
            to={`/jobs/${referenceId}/interview-tips`}
          >
            {t('interviewTips')}
          </Link>
          <div className="actions">
            <Button
              type="default"
              className="edit"
              text={t('edit')}
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
              />
            </Popconfirm>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ResumeCard;
