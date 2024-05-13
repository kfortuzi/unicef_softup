import { BulbOutlined } from '@ant-design/icons';
import { Col, Modal, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import usePostJobTipsAndAdvices from 'src/api/jobs/hooks/usePostJobTipsAndAdvices';
import Button from 'src/components/common/Button/Button';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';

type JobInterviewTipsModalProps = {
  jobId: string;
};

const JobInterviewTipsModal: React.FC<JobInterviewTipsModalProps> = ({ jobId }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'interviewTips' });
  const { Title, Text } = Typography;

  const { mutate: postJobTipsAndAdvices, data, isPending, isError } = usePostJobTipsAndAdvices(jobId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    postJobTipsAndAdvices({ id: jobId });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isError) {
      setIsModalOpen(false);
    }
  }, [isError]);

  return (
    <>
      <Modal
        title={t('header')}
        open={isModalOpen}
        destroyOnClose={false}
        onCancel={handleCancel}
        width={720}
        footer={null}
      >
        {isPending ? (
          <LoadingFullPage />
        ) : (
          <Row>
            <Col span={24}>
              <div>
                <Title level={4}>{t('tips')}</Title>
                <Text>{data?.tips}</Text>
                <hr className="divider" />
                <Title level={4}>{t('interviewQuestions')}</Title>
                <Text style={{ whiteSpace: 'pre-wrap' }}>{data?.interviewQuestions}</Text>
              </div>
            </Col>
          </Row>
        )}
      </Modal>

      <Button
        className="interview-tips-button"
        icon={<BulbOutlined />}
        onClick={showModal}
        text={t('tips')}
        type="link"
      />
    </>
  );
};

export default JobInterviewTipsModal;
