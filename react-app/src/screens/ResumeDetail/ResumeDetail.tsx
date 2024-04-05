import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import { GetResumeResponse } from 'src/api/resumes/types';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';
import ResumePdfView from 'src/components/profile/myResume/ResumePdfView/ResumePdfView';
import { setBaseCvId } from 'src/helpers/baseCvStorage';

const ResumeDetail: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const { id } = useParams();
  const { data: resumes, isFetching } = useGetResumes();

  if (isFetching) {
    return <LoadingFullPage />;
  }

  const resume = resumes?.find((resume) => resume.id === id) as GetResumeResponse;
  setBaseCvId(resume.id);

  return (
    <div>
      <MyResumeView resume={resume} />
      {/* <ResumePdfView /> */}
    </div>
  );
};

export default ResumeDetail;
