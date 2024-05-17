import { Col, Image, Row, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import AdjustCvPreviewBg from 'src/assets/images/adjust-cv-preview-bg.jpg';
import AdjustCvPreview from 'src/assets/images/adjust-cv-preview.gif';
import AskAssistantPreviewBg from 'src/assets/images/ask-assistant-preview-bg.jpg';
import AskAssistantPreview from 'src/assets/images/ask-assistant-preview.gif';
import GenerateCoverLetterPreviewBg from 'src/assets/images/generate-cover-letter-preview-bg.jpg';
import GenerateCoverLetterPreview from 'src/assets/images/generate-cover-letter-preview.gif';
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
          md={24}
          sm={24}
          xs={24}
        >
          <Typography.Title
            className="title"
            style={{ margin: 0 }}
          >
            {t('header')}
          </Typography.Title>
          <Typography.Paragraph className="header-subtitle">{t('subHeader')}</Typography.Paragraph>
          <Chatbot />
        </Col>
      </Row>
      <Row
        className="services"
        justify="center"
        align="middle"
      >
        <div className="services-header">
          <Typography.Text className="motto-text">{t('servicesStepsText')}</Typography.Text>
          <Typography.Title className="services-title">{t('servicesTitle')}</Typography.Title>
        </div>
        <div className="services-cards">
          <Col
            className="service-wrapper"
            md={24}
            sm={24}
            xs={24}
          >
            <div className="service-header-and-description">
              <Typography.Title className="title">{t('service1')}</Typography.Title>
              <Typography.Paragraph
                ellipsis={{ rows: 10, tooltip: true }}
                className="description"
              >
                {t('service1Description')}
              </Typography.Paragraph>
            </div>
            <div
              className="service-preview-container"
              style={{ backgroundImage: `url("${AdjustCvPreviewBg}")` }}
            >
              <Image
                src={AdjustCvPreview}
                className="service-preview"
                preview={false}
              />
            </div>
          </Col>
          <Col
            className="service-wrapper"
            md={24}
            sm={24}
            xs={24}
          >
            <div className="service-header-and-description">
              <Typography.Title className="title">{t('service2')}</Typography.Title>
              <Typography.Paragraph
                ellipsis={{ rows: 10, tooltip: true }}
                className="description"
              >
                {t('service2Description')}
              </Typography.Paragraph>
            </div>
            <div
              className="service-preview-container"
              style={{ backgroundImage: `url("${GenerateCoverLetterPreviewBg}")` }}
            >
              <Image
                src={GenerateCoverLetterPreview}
                className="service-preview"
                preview={false}
              />
            </div>
          </Col>
          <Col
            className="service-wrapper"
            md={24}
            sm={24}
            xs={24}
          >
            <div className="service-header-and-description">
              <Typography.Title className="title">{t('service3')}</Typography.Title>
              <Typography.Paragraph
                ellipsis={{ rows: 10, tooltip: true }}
                className="description"
              >
                {t('service3Description')}
              </Typography.Paragraph>
            </div>
            <div
              className="service-preview-container"
              style={{ backgroundImage: `url("${AskAssistantPreviewBg}")` }}
            >
              <Image
                src={AskAssistantPreview}
                className="service-preview"
                preview={false}
              />
            </div>
          </Col>
        </div>
      </Row>
      <Row
        className="tip-of-the-day"
        align="middle"
      >
        <Col
          md={24}
          sm={24}
          xs={24}
        >
          <Typography.Title className="title">{t('tipOfTheDay')}</Typography.Title>
          <Typography.Paragraph className="description">{dayOfTip}</Typography.Paragraph>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
