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
    <div className="training-card-container-video">
      <Card
        cover={
          <div className="training-card-video">
            <Player
              src={attributes.VideoContent.data.attributes.url}
              playsInline
            />
          </div>
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
