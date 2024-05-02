import { Col, Empty, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetTrainingVideos from 'src/api/assets/hooks/useGetTrainingVideos';
import TrainingVideoCard from 'src/components/training/TrainingVideoCard/TrainingVideoCard';

const TrainingVideos: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'trainingVideos' });
  const { data: trainings } = useGetTrainingVideos({ take: 10 });

  return (
    <div className="trainings-container">
      <Typography.Title className="title">{t('header')}</Typography.Title>
      {trainings?.data ? (
        <Row
          className="list-of-trainings"
          gutter={[32, 32]}
        >
          {trainings?.data.map((video) => (
            <Col
              key={video.id}
              className="gutter-row"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
              xxl={6}
            >
              <TrainingVideoCard
                id={video.id}
                attributes={video.attributes}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Empty
          description={t('noVideos')}
          className="empty-text"
        />
      )}
    </div>
  );
};

export default TrainingVideos;
