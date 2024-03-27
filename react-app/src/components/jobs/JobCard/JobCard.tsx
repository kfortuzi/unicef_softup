import { BankOutlined, EnvironmentOutlined, FileSearchOutlined, HourglassOutlined } from '@ant-design/icons';
import { Card, Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import Button from 'src/components/common/Button/Button';

type JobCardProps = {
  jobId: number;
  position: string;
  description?: string;
  companyName: string;
  location: string;
};

const JobCard: React.FC<JobCardProps> = ({ jobId, position, description, companyName, location }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });
  const navigate = useNavigate();
  const openInAkpa = (jobId: number) => {
    const win = window.open(`https://www.puna.gov.al/job/${jobId}`, '_blank');
    if (win) {
      win.focus();
    }
  };

  return (
    <div className="job-card-container">
      <Card className="job-card-body">
        <div className="metadata">
          <div>
            <h3 className="position">{position}</h3>
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
                onClick={() => openInAkpa(jobId)}
                text={t('applyButtonText')}
                size="middle"
              />

              <Button
                type="primary"
                text={t('getPreparedButtonText')}
                size="middle"
              />
            </div>
          </div>
        </div>
        <div className="logo-container">
          <Image
            preview={false}
            className="logo"
            width={200}
            src="/src/assets/images/logo.png"
          />
        </div>
      </Card>
    </div>
  );
};

export default JobCard;
