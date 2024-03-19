import { Card, Image } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Resume from 'src/assets/images/resume.webp';

const ResumeCard: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });

  return (
    <div className="resume-card-container">
      <Card
        cover={
          <Image
            alt="example"
            src={Resume}
          />
        }
        bordered={false}
        className="resume-card-body"
      >
        <div className="metadata">
          <h3 className="name">Jane Doe</h3>
          <p className="last-updated">{t('lastUpdated')}: 24 Jun 2021</p>
        </div>
        <div>
          <Link
            className="tips"
            to="#"
          >
            {t('interviewTips')}
          </Link>
        </div>
        <div className="actions">
          <div className="edit">{t('edit')}</div>
          <a className="delete">{t('delete')}</a>
        </div>
      </Card>
    </div>
  );
};

export default ResumeCard;
