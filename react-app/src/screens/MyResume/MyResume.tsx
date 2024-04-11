import React from 'react';
import { useTranslation } from 'react-i18next';
import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import { GetResumeResponse } from 'src/api/resumes/types';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import { PDFDownloadLink } from '@react-pdf/renderer';

import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';
import ResumePdfView from 'src/components/profile/myResume/ResumePdfView/ResumePdfView';
import { setBaseCvId } from 'src/helpers/baseCvStorage';
import Button from 'src/components/common/Button/Button';

const MyResume: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
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
      {/* <PDFDownloadLink document={<ResumePdfView resume={resume} />}>
        <Button
          text={t('downloadPdfButtonText')}
          style={{ alignSelf: 'center' }}
        />
      </PDFDownloadLink> */}
      {/* <ResumePdfView resume={resume} /> */}
    </div>
  );
};

export default MyResume;
