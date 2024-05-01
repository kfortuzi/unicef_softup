import { Col, Empty, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetCoverLetters from 'src/api/coverLetters/hooks/useGetCoverLetters';
import CoverLetterCard from 'src/components/coverLetter/CoverLetterCard/CoverLetterCard';
import CoverLetterForm from 'src/components/coverLetter/CoverLetterForm/CoverLetterForm';
import dateTimeFormats from 'src/constants/dateTimeFormats';

const MyCoverLetters: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'myCoverLetters' });
  const { data: coverLetters } = useGetCoverLetters();
  const tailoredCoverLetters = coverLetters?.filter((coverLetter) => coverLetter.referenceId !== null);
  const userGeneratedCoverLetters = coverLetters?.filter((coverLetter) => coverLetter.referenceId === null);

  return (
    <div className="my-cover-letters-container">
      <div className="my-cover-letters-header">
        <Typography.Title className="title">{t('header')}</Typography.Title>
        <CoverLetterForm />
      </div>

      <h2 className="category">{t('userGeneratedCoverLetters')}</h2>
      {
        userGeneratedCoverLetters?.length ? (
          <Row
            className="list-of-cover-letters"
            gutter={[32, 32]}
          >
            {
              userGeneratedCoverLetters?.map((coverLetter) => (
                <Col
                  key={coverLetter.id}
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={6}
                  xxl={3}
                >
                  <CoverLetterCard
                    id={coverLetter.id}
                    to={coverLetter.to}
                    createdAt={dayjs(coverLetter.createdAt).format(dateTimeFormats.albanianDate)}
                  />
                </Col>
              ))
            }
          </Row>
        ) : <Empty className='empty-text' description={t('noUserGeneratedCoverLetters')} />
      }
      <h2 className="category">{t('tailoredCoverLetters')}</h2>
      {
        tailoredCoverLetters?.length ? (
          <Row
            className="list-of-cover-letters"
            gutter={[32, 32]}
          >
            {
              tailoredCoverLetters?.map((coverLetter) => (
                <Col
                  key={coverLetter.id}
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={8}
                  xl={6}
                  xxl={3}
                >
                  <CoverLetterCard
                    id={coverLetter.id}
                    to={coverLetter.to}
                    createdAt={dayjs(coverLetter.createdAt).format(dateTimeFormats.albanianDate)}
                  />
                </Col>
              ))
            }
          </Row>
        ) : <Empty className='empty-text' description={t('noUserGeneratedCoverLetters')} />
      }
    </div>
  );
};

export default MyCoverLetters;
