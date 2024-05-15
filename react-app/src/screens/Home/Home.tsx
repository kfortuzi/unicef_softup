import { Col, Image, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import counselingImage from 'src/assets/images/counseling.svg';
import generateCoverLetterImage from 'src/assets/images/generate-cover-letter.svg';
import generateResumeImage from 'src/assets/images/generate-resume.svg';
import lambImage from 'src/assets/images/lamb.png';
import Resume from 'src/assets/images/resume.webp';
import Chatbot from 'src/components/chatbot/Chatbot';
import getDayOfTip from 'src/utils/getDayOfTip';

const Home: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const dayOfTip = getDayOfTip();

  return (
    <div className="home-container">
      <Row className="home-header">
        <Col
          className="title-container"
          md={15}
          sm={24}
          xs={24}
        >
          <Typography.Title
            className="title"
            style={{ margin: 0 }}
          >
            {t('header')}
          </Typography.Title>
          <hr className="header-divider" />
          <Typography.Paragraph className="header-subtitle">{t('subHeader')}</Typography.Paragraph>
          <Chatbot />
        </Col>
        <Col
          className="picture-container"
          md={8}
          sm={24}
          xs={24}
        >
          <Image
            src={Resume}
            preview={false}
            alt="home-header"
            className="header-picture"
          />
        </Col>
      </Row>
      <Row
        className="services"
        justify="center"
        align="middle"
        gutter={[32, 32]}
      >
        <Typography.Text className="services-steps-text">{t('servicesStepsText')}</Typography.Text>
        <Typography.Title className="services-title">{t('servicesTitle')}</Typography.Title>
        <Col
          className="service-wrapper"
          md={8}
          sm={24}
          xs={24}
        >
          <Image
            src={generateResumeImage}
            className="icon"
            preview={false}
          />
          <Typography.Title className="title">{t('service1')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service1Description')}</Typography.Paragraph>
        </Col>
        <Col
          className="service-wrapper"
          md={8}
          sm={24}
          xs={24}
        >
          <Image
            src={generateCoverLetterImage}
            className="icon"
            preview={false}
          />
          <Typography.Title className="title">{t('service2')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service2Description')}</Typography.Paragraph>
        </Col>
        <Col
          className="service-wrapper"
          md={8}
          sm={24}
          xs={24}
        >
          <Image
            src={counselingImage}
            className="icon"
            preview={false}
          />
          <Typography.Title className="title">{t('service3')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service3Description')}</Typography.Paragraph>
        </Col>
      </Row>
      <div className="tip-of-the-day-border-wrapper">
        <Row
          className="tip-of-the-day"
          align="middle"
        >
          <Col
            className="tip-of-the-day-icon"
            md={8}
            sm={6}
            xs={10}
          >
            <Image
              src={lambImage}
              preview={false}
            />
          </Col>
          <Col
            md={16}
            sm={16}
            xs={14}
          >
            <Typography.Title className="title">{t('tipOfTheDay')}</Typography.Title>
            <Typography.Paragraph className="description">{dayOfTip}</Typography.Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
