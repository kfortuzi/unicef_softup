import { Col, Row, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetJob from 'src/api/jobs/hooks/useGetJob';
import usePostJobTipsAndAdvices from 'src/api/jobs/hooks/usePostJobTipsAndAdvices';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';

const InterviewTips: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'interviewTips' });
  const { id } = useParams();
  const { Title, Text } = Typography;

  const { data: job } = useGetJob({ id });
  const { mutate: postJobTipsAndAdvices, data, isPending } = usePostJobTipsAndAdvices(id);

  useEffect(() => {
    postJobTipsAndAdvices({ id });
  }, [postJobTipsAndAdvices, id]);

  if (isPending) {
    return <LoadingFullPage />;
  }

  return (
    <Row justify="center">
      <Col
        xs={24}
        sm={24}
        md={24}
        xl={24}
        xxl={24}
      >
        <div className="interview-tips-container">
          <Title
            level={3}
            className="interview-tips-title"
          >
            {job?.title ? `${job.title} - ` : ''}
            {t('header')}
          </Title>
          <Title level={4}>{t('tips')}</Title>
          <Text>{data?.tips}</Text>
          <hr className="divider" />
          <Title level={4}>{t('interviewQuestions')}</Title>
          <Text style={{ whiteSpace: 'pre-wrap' }}>{data?.interviewQuestions}</Text>
        </div>
      </Col>
    </Row>
  );
};

export default InterviewTips;
