import { BankOutlined, FileSearchOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Card, Popconfirm } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

import useDeleteCoverLetter from 'src/api/coverLetters/hooks/useDeleteCoverLetter';
import useGetJob from 'src/api/jobs/hooks/useGetJob';
import Button from 'src/components/common/Button/Button';

type CoverLetterCardProps = {
  id: string;
  to: string;
  company?: string;
  createdAt: string;
  referenceId?: string;
};

const CoverLetterCard: React.FC<CoverLetterCardProps> = ({ id, to, referenceId, company }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'myCoverLetters' });
  const navigate = useNavigate();
  const { mutate: deleteCoverLetter } = useDeleteCoverLetter();
  const { data: job } = useGetJob({ id: referenceId });

  const confirm = () => {
    deleteCoverLetter({ id: id });
  };

  return (
    <div className="cover-letter-card-container">
      <Card
        bordered={false}
        className="cover-letter-card-body"
      >
        <div className="metadata">
          <h3 className="name">
            {referenceId ? (
              <Link
                to={`https://www.puna.gov.al/job/${job?.referenceId}`}
                type="_blank"
                className="name"
              >
                {to}
              </Link>
            ) : (
              to
            )}
          </h3>
          {job ? (
            <>
              <p className="description-group">
                <FileSearchOutlined />
                <span className="description">{job?.title}</span>
              </p>
              <p className="description-group">
                <BankOutlined />
                <span className="description">{job?.company}</span>
              </p>
            </>
          ) : (
            <p className="description-group">
              <BankOutlined />
              <span className="description">{company}</span>
            </p>
          )}
        </div>
        <div className="actions">
          <Button
            type="default"
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
              size="small"
            />
          </Popconfirm>
        </div>
      </Card>
    </div>
  );
};

export default CoverLetterCard;
