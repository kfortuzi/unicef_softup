import { DownloadOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetCoverLetter from 'src/api/coverLetters/hooks/useGetCoverLetter';
import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { User } from 'src/api/users/types';
import Button from 'src/components/common/Button/Button';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import CoverLetterPdfView from 'src/components/coverLetter/CoverLetterPdfView/CoverLetterPdfView';
import CoverLetterView from 'src/components/coverLetter/CoverLetterView/CoverLetterView';

const MyCoverLetter: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  const { id } = useParams();
  const { data: coverLetter, isFetching } = useGetCoverLetter({ id });
  const { data: user } = useGetProfile();

  if (isFetching) {
    return <LoadingFullPage />;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '20px',
      }}
    >
      <h1 className='cover-letter-details-container'>
        {t('header')}
        <PDFDownloadLink
          document={
            <CoverLetterPdfView coverLetter={coverLetter as GetCoverLetterResponse} user={user as User} />
          }
          fileName="coverLetter.pdf"
          style={{ width: 'fit-content' }}
        >
          <Button
            text={t('downloadPdfButtonText')}
            type="primary"
            icon={<DownloadOutlined />}
          />
        </PDFDownloadLink></h1>

      <CoverLetterView
        coverLetter={coverLetter as GetCoverLetterResponse}
        user={user as User}
      />

    </div>
  );
};

export default MyCoverLetter;
