import { Image, Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import counselingImage from 'src/assets/images/counseling.svg';
import generateCoverLetterImage from 'src/assets/images/generate-cover-letter.svg';
import generateResumeImage from 'src/assets/images/generate-resume.svg';
import lambImage from 'src/assets/images/lamb.png';
import Resume from 'src/assets/images/resume.webp';
import Chatbot from 'src/components/chatbot/Chatbot';
import Button from 'src/components/common/Button/Button';
import getDayOfTip from 'src/utils/getDayOfTip';

const Home: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });
  const dayOfTip = getDayOfTip();

  return (
    <div className="home-container">
      <div className="home-header">
        <div className="title-container">
          <Typography.Title
            className="title"
            style={{ margin: 0 }}
          >
            {t('header')}
          </Typography.Title>
          <Typography.Paragraph className='header-subtitle'>{t('subHeader')}</Typography.Paragraph>
          <hr className='header-divider' />
          <Button
            type="primary"
            text={t('learnMore')}
            size='large'
            className='learn-more-button'
          />
        </div>
        <div className="picture-container">
          <img
            src={Resume}
            alt="home-header"
            className="header-picture"
            height={300}
            width={200}
          />
        </div>
        <Chatbot />
      </div>
      <div className="services">
        <Typography.Text className="services-steps-text">{t('servicesStepsText')}</Typography.Text>
        <Typography.Title className="services-title">{t('servicesTitle')}</Typography.Title>
        <div className="service-wrapper">
          <Image src={generateResumeImage} className="icon" preview={false} />
          <Typography.Title className="title">{t('service1')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service1Description')}</Typography.Paragraph>
        </div>
        <div className="service-wrapper">
          <Image src={generateCoverLetterImage} className="icon" preview={false} />
          <Typography.Title className="title">{t('service2')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service2Description')}</Typography.Paragraph>
        </div>
        <div className="service-wrapper">
          <Image src={counselingImage} className="icon" preview={false} />
          <Typography.Title className="title">{t('service3')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service3Description')}</Typography.Paragraph>
        </div>
      </div>
      <div className='tip-of-the-day-border-wrapper'>
        <div className="tip-of-the-day">
          <div className='tip-of-the-day-icon'>
            <Image src={lambImage} preview={false} />
          </div>
          <div>
            <Typography.Title className="title">{t('tipOfTheDay')}</Typography.Title>
            <Typography.Paragraph className="description">{dayOfTip}</Typography.Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
