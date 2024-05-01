import { QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Image, Popconfirm } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import useDeleteCoverLetter from 'src/api/coverLetters/hooks/useDeleteCoverLetter';
import useGetJob from 'src/api/jobs/hooks/useGetJob';
import CoverLetterImage from 'src/assets/images/cover-letter.jpg';
import Button from 'src/components/common/Button/Button';

type CoverLetterCardProps = {
  id: string;
  to: string;
  createdAt: string;
  referenceId?: string;
};

const CoverLetterCard: React.FC<CoverLetterCardProps> = ({ id, to, createdAt, referenceId }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'myCoverLetters' });
  const navigate = useNavigate();
  const { mutate: deleteCoverLetter } = useDeleteCoverLetter();
  const { data: job } = useGetJob({ id: referenceId });

  const confirm = () => {
    deleteCoverLetter({ id: id })
  };

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
          <h3 className="name">
            {referenceId ? (
              <Link to={`https://www.puna.gov.al/job/${job?.referenceId}`} type='_blank'>{to}</Link>
            ) : <span>{to}</span>}
          </h3>
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

          <Popconfirm
            title={t('coverLetterDeletePopconfirmTitle')}
            description={t('coverLetterDeletePopconfirmDescription')}
            onConfirm={confirm}
            icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
          >
            <Button
              type="primary"
              text={t('delete')}
              size='small'
            />
          </Popconfirm>
        </div>
      </Card>
    </div>
  );
};

export default CoverLetterCard;
