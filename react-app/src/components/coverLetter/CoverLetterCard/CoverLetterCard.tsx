import { Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CoverLetter from 'src/assets/images/cover-letter.png';

const CoverLetterCard: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myCoverLetters' });

  return (
    <div className="cover-letter-card-container">
      <div className="header">
        <Image
          src={CoverLetter}
          alt="resume"
        />
      </div>
      <div className="metadata">
        <h3 className="name">John Doe</h3>
        <p className="last-updated">{t('lastUpdated')}: 24 Jun 2021</p>
      </div>
      <div className="actions">
        <div className="edit">{t('edit')}</div>
        <div className="delete">{t('delete')}</div>
      </div>
    </div>
  );
};

export default CoverLetterCard;
