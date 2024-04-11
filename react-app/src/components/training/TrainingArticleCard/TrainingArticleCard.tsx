import { Card, Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleAttributes } from 'src/api/assets/types';

type TrainingArticleCardProps = {
  id: number;
  attributes: ArticleAttributes;
};

const TrainingArticleCard: React.FC<TrainingArticleCardProps> = ({ id, attributes }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'trainingCard' });
  const fallBackImage =
    'https://t4.ftcdn.net/jpg/04/65/41/29/360_F_465412924_Ir2XnMp0TYJYtpl1IdNSPYt0UNDVMJv3.jpg';

  return (
    <div className="training-card-container">
      <Card
        cover={
          <>
            <Image
              src={attributes?.ArticleImage?.data?.attributes?.url}
              alt={attributes.Title}
              preview={false}
              fallback={fallBackImage}
              height={210}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </>
        }
        key={id}
        bordered={false}
        className="training-card-body"
      >
        <div className="metadata">
          <h3 className="name">{attributes.Title}</h3>
          <a
            href={attributes?.ArticleContent?.data?.attributes?.url}
            target="_blank"
          >
            {t('openArticle')}
          </a>
        </div>
      </Card>
    </div>
  );
};

export default TrainingArticleCard;
