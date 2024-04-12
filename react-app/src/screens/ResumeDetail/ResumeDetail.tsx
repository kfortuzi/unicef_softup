import React from 'react';
import { useParams } from 'react-router-dom';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import { GetResumeResponse } from 'src/api/resumes/types';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';
import { setBaseCvId } from 'src/helpers/baseCvStorage';

const ResumeDetail: React.FC = () => {
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
    </div>
  );
};

export default ResumeDetail;
