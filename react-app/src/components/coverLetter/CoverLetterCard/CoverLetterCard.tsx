import { Card, Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useDeleteCoverLetter from 'src/api/coverLetters/hooks/useDeleteCoverLetter';
import CoverLetterImage from 'src/assets/images/cover-letter.jpg';
import Button from 'src/components/common/Button/Button';

type CoverLetterCardProps = {
  id: string;
  to: string;
  createdAt: string;
};

const CoverLetterCard: React.FC<CoverLetterCardProps> = ({ id, to, createdAt }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'myCoverLetters' });
  const navigate = useNavigate();
  const { mutate: deleteCoverLetter } = useDeleteCoverLetter();

  return (
    <div className="cover-letter-card-container">
      <Card
        cover={
          <Image
            alt="example"
            src={CoverLetterImage}
            height={200}
            preview={false}
            style={{ objectFit: 'cover' }}
          />
        }
        bordered={false}
        className="cover-letter-card-body"
      >
        <div className="metadata">
          <h3 className="name">{to}</h3>
          <p className="last-updated">
            {t('lastUpdated')}: {createdAt}
          </p>
        </div>
        <div className="actions">
          <Button
            type="link"
            className="edit"
            text={t('edit')}
            onClick={() => navigate('/cover-letters/' + id)}
            size="small"
          />

          <Button
            type="primary"
            text={t('delete')}
            onClick={() => deleteCoverLetter({ id })}
            size="small"
          />
        </div>
      </Card>
    </div>
  );
};

export default CoverLetterCard;
