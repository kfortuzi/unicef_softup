import { Col, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import ResumeCard from 'src/components/resume/ResumeCard/ResumeCard';

const MyResumes: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });
  const { data: resumes } = useGetResumes();

  return (
    <div className="resumes-container">
      <Typography.Title className="title">{t('header')}</Typography.Title>
      <Row
        className="list-of-resumes"
        gutter={[32, 32]}
      >
        {resumes
          ?.filter((resume) => resume.referenceId !== null)
          .map((resume) => (
            <Col
              key={resume.id}
              className="gutter-row"
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={6}
              xxl={4}
            >
              <ResumeCard resume={resume} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MyResumes;
