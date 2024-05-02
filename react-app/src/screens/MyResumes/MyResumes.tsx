import { Col, Empty, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import ResumeCard from 'src/components/resume/ResumeCard/ResumeCard';

const MyResumes: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });
  const { data: resumesData } = useGetResumes();

  return (
    <div className="resumes-container">
      <Typography.Title className="title">{t('header')}</Typography.Title>
      {resumesData?.length ? (
        <Row
          className="list-of-resumes"
          gutter={[32, 32]}
        >
          {resumesData
            ?.filter((resume) => resume.referenceId !== null)
            .map((resume) => (
              <Col
                key={resume.id}
                className="gutter-row"
                xs={26}
                sm={26}
                md={14}
                lg={12}
                xl={10}
                xxl={8}
              >
                <ResumeCard resume={resume} />
              </Col>
            ))}
        </Row>
      ) : (
        <Empty
          className="empty-text"
          description={t('noUserGeneratedResumes')}
        />
      )}
    </div>
  );
};

export default MyResumes;
