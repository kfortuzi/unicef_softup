import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ResumeQuestionnaireForm from 'src/components/resume/ResumeQuestionnaireForm/ResumeQuestionnaireForm';

const ResumeQuestionnaire: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'resumeQuestionnaire' });

  return (
    <div className="resume-questionnaire-container">
      <Row justify='center'>
        <Col
          xs={24}
          sm={24}
          md={16}
          xl={12}
          xxl={12}
        >
          <div className='resume-questionnaire-form'>
            <h1>{t('header')}</h1>
            <ResumeQuestionnaireForm />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeQuestionnaire;
