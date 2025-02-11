import { DownloadOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetCoverLetter from 'src/api/coverLetters/hooks/useGetCoverLetter';
import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import useGetJob from 'src/api/jobs/hooks/useGetJob';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { User } from 'src/api/users/types';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import CoverLetterPdfView from 'src/components/coverLetter/CoverLetterPdfView/CoverLetterPdfView';
import CoverLetterView from 'src/components/coverLetter/CoverLetterView/CoverLetterView';

const MyCoverLetter: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });

  const { id } = useParams();
  const { data: coverLetter, isFetching, isFetched } = useGetCoverLetter({ id });
  const { data: user } = useGetProfile();
  const { data: job } = useGetJob({ id: coverLetter?.referenceId });

  if (isFetching) {
    return <LoadingFullPage />;
  }

  const isEnhancedCoverLetter = !!coverLetter?.referenceId;
  const fileName = isEnhancedCoverLetter
    ? `${user?.firstName}-${user?.lastName}-${job?.title}.pdf`
    : `${user?.firstName}-${user?.lastName}.pdf`;

  return (
    <div className="cover-letter-layout">
      <div className="slide-container">
        <div className="cover-letter-details-header">
          <h1> {t('header')} </h1>
          <PDFDownloadLink
            document={
              <CoverLetterPdfView
                coverLetter={coverLetter as GetCoverLetterResponse}
                user={user as User}
              />
            }
            fileName={fileName}
          >
            {t('downloadPdfButtonText')} <DownloadOutlined />
          </PDFDownloadLink>
        </div>
        <div className="cover-letter-details-body">
          <CoverLetterView
            coverLetter={coverLetter as GetCoverLetterResponse}
            isFetched={isFetched}
            user={user as User}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCoverLetter;
