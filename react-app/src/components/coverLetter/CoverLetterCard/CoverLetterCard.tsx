import { Card, Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import CoverLetter from 'src/assets/images/cover-letter.png';

const CoverLetterCard: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myCoverLetters' });

  return (
    <div className="cover-letter-card-container">
      <Card
        cover={
          <Image
            alt="example"
            src={CoverLetter}
          />
        }
        bordered={false}
        className="cover-letter-card-body"
      >
        <div className="metadata">
          <h3 className="name">Jane Doe</h3>
          <p className="last-updated">{t('lastUpdated')}: 24 Jun 2021</p>
        </div>
        <div className="actions">
          <Link
            to="#"
            className="edit"
          >
            {t('edit')}
          </Link>
          <Link
            to="#"
            className="delete"
          >
            {t('delete')}
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default CoverLetterCard;
