import { Card } from 'antd';
import React from 'react';
import { Player } from 'video-react';

import { VideoAttributes } from 'src/api/assets/types';

type TrainingVideoCardProps = {
  id: number;
  attributes: VideoAttributes;
};

const TrainingVideoCard: React.FC<TrainingVideoCardProps> = ({ id, attributes }) => {
  return (
    <div className="training-card-container">
      <Card
        cover={
          <Player
            src={attributes.VideoContent.data.attributes.url}
            playsInline
          />
        }
        key={id}
        bordered={false}
        className="training-card-body"
      >
        <div className="metadata">
          <h3 className="name">{attributes.Title}</h3>
        </div>
      </Card>
    </div>
  );
};

export default TrainingVideoCard;
