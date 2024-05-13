import { Col, Empty, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import ResumeCard from 'src/components/resume/ResumeCard/ResumeCard';

const MyResumes: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });
  const { data: resumesData } = useGetResumes();

  const userGeneratedResumes = resumesData?.filter((resume) => !!resume.referenceId);

  return (
    <div className="resumes-container">
      {userGeneratedResumes?.length ? (
        <Row
          className="list-of-resumes"
          gutter={[32, 32]}
        >
          {userGeneratedResumes
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
