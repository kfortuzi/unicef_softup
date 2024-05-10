import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetResume from 'src/api/resumes/hooks/useGetResume';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';

const ResumeDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const { data: resume, isFetching } = useGetResume({ id });

  if (isFetching) {
    return <LoadingFullPage />;
  }

  return (
    <div>
      {resume ? (
        <MyResumeView
          resume={resume}
          showTitle
        />
      ) : (
        <div>{t('resumeNotFound')}</div>
      )}
    </div>
  );
};

export default ResumeDetail;
