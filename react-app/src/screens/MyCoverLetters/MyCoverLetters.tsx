import { Col, Row, Typography } from 'antd';
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

  return (
    <div className="my-cover-letters-container">
      <div className="my-cover-letters-header">
        <Typography.Title className="title">{t('header')}</Typography.Title>
        <CoverLetterForm />
      </div>

      {
        //will be added later
        /* <h2 className="category">{t('aiGenerated')}</h2>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {coverLetters &&
          coverLetters.map((coverLetter) => (
            <Col
              key={coverLetter.id}
              className="gutter-row"
              span={4}
            >
              <CoverLetterCard
                id={coverLetter.id}
                to={coverLetter.to}
                createdAt={dayjs(coverLetter.createdAt).format(dateTimeFormats.albanianDate)}
              />
            </Col>
          ))}
      </Row> */
      }
      {/* <h2 className="category">{t('userGenerated')}</h2> */}
      <Row
        className="list-of-cover-letters"
        gutter={[32, 32]}
      >
        {coverLetters?.map((coverLetter) => (
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
        ))}
      </Row>
    </div>
  );
};

export default MyCoverLetters;
