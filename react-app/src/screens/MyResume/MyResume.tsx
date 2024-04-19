import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';

const MyResume: React.FC = () => {
  const { data: resumes, isFetched } = useGetResumes();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  if (!isFetched) {
    return <LoadingFullPage />;
  }

  const baseResume = resumes?.find((resume) => resume.referenceId === null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '5px',
        marginBottom: '20px',
      }}
    >
      {baseResume ? (
        <MyResumeView resume={baseResume} key={`my-resume-detail-${baseResume.id}`} />
      ) : (
        <div key={'resume-not-found'} >{t('resumeNotFound')}</div>
      )}
    </div>
  );
};

export default MyResume;
