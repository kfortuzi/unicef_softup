import { Card, Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CoverLetter from 'src/assets/images/cover-letter.png';
import Button from 'src/components/common/Button/Button';

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
          <Button
            type="link"
            className="edit"
            text={t('edit')}
            size="small"
          />

          <Button
            type="primary"
            text={t('delete')}
            size="small"
          />
        </div>
      </Card>
    </div>
  );
};

export default CoverLetterCard;
