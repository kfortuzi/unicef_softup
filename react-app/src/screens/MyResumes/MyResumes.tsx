import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import ResumeCard from 'src/components/resume/ResumeCard/ResumeCard';

const MyResumes: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myResumes' });

  return (
    <div className="my-resumes-container">
      <div className="my-resumes-header">
        <Typography.Title className="title">{t('header')}</Typography.Title>
      </div>
      <div className="list-of-resumes">
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
        <ResumeCard />
      </div>
    </div>
  );
};

export default MyResumes;
