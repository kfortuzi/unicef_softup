import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import CoverLetterQuestionnaireForm from 'src/components/coverLetter/CoverLetterQuestionnaireForm/CoverLetterQuestionnaireForm';

const CoverLetterQuestionnaire: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterQuestionnaire' });

  return (
    <div className="cover-letter-questionnaire-container">
      <Row justify='center'>
        <Col
          span={16}
        >
          <div className='cover-letter-questionnaire-form'>
            <h1>{t('header')}</h1>
            <CoverLetterQuestionnaireForm />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CoverLetterQuestionnaire;
