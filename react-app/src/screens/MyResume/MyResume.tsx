import React from 'react';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import { GetResumeResponse } from 'src/api/resumes/types';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';
import { setBaseCvId } from 'src/helpers/baseCvStorage';

const MyResume: React.FC = () => {
  const { data: resumes, isFetched } = useGetResumes();

  if (!isFetched) {
    return <LoadingFullPage />;
  }

  const resume = resumes?.find((resume) => resume.referenceId === null) as GetResumeResponse;

  setBaseCvId(resume.id);

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
      <MyResumeView resume={resume} />
    </div>
  );
};

export default MyResume;
