import { Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Resume from 'src/assets/images/resume.webp';

const ResumeCard: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });

  return (
    <div className="resume-card-container">
      <div className="header">
        <Image
          src={Resume}
          alt="resume"
        />
      </div>
      <div className="metadata">
        <h3 className="name">Jane Doe</h3>
        <p className="last-updated">{t('lastUpdated')}: 24 Jun 2021</p>
      </div>
      <div className="actions">
        <div className="edit">{t('edit')}</div>
        <div className="delete">{t('delete')}</div>
      </div>
      <div className="tips">
        <a href="#">{t('interviewTips')}</a>
      </div>
    </div>
  );
};

export default ResumeCard;
