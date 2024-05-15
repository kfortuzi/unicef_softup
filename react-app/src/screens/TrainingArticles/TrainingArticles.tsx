import { Col, Empty, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetTrainingArticles from 'src/api/assets/hooks/useGetTrainingArticles';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import TrainingArticleCard from 'src/components/training/TrainingArticleCard/TrainingArticleCard';

const TrainingArticles: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'trainingArticles' });
  const { data: articles, isLoading } = useGetTrainingArticles({ take: 10 });

  if (isLoading) return <LoadingFullPage />;

  return (
    <div className="trainings-container">
      {articles?.data ? (
        <Row
          className="list-of-trainings"
          gutter={[32, 32]}
        >
          {articles?.data.map((article) => (
            <Col
              key={article.id}
              className="gutter-row"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
              xxl={6}
            >
              <TrainingArticleCard
                id={article.id}
                attributes={article.attributes}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty
          description={t('noArticles')}
          className="empty-text"
        />
      )}
    </div>
  );
};

export default TrainingArticles;
