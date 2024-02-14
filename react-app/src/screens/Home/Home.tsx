import { ContainerOutlined, QuestionCircleOutlined, SolutionOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';

const Home: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });

  return (
    <div className="home-container">
      <div className="home-header">
        <Typography.Title
          className="title"
          style={{ margin: 0 }}
        >
          {t('header')}
        </Typography.Title>
        <Typography.Paragraph style={{ margin: 0 }}>{t('subHeader')}</Typography.Paragraph>
        <Button
          type="primary"
          text={t('learnMore')}
        />
      </div>
      <div className="services">
        <Typography.Title className="services-title">{t('servicesTitle')}</Typography.Title>
        <div className="service-wrapper">
          <SolutionOutlined className="icon" />
          <Typography.Title className="title">{t('service1')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service1Description')}</Typography.Paragraph>
        </div>
        <div className="service-wrapper">
          <ContainerOutlined className="icon" />
          <Typography.Title className="title">{t('service2')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service2Description')}</Typography.Paragraph>
        </div>
        <div className="service-wrapper">
          <QuestionCircleOutlined className="icon" />
          <Typography.Title className="title">{t('service3')}</Typography.Title>
          <Typography.Paragraph className="description">{t('service3Description')}</Typography.Paragraph>
        </div>
      </div>
      <div className="tip-of-the-day">
        <Typography.Title className="title">{t('tipOfTheDay')}</Typography.Title>
        <Typography.Paragraph className="description">{'tipOfTheDayDescription'}</Typography.Paragraph>
        <Typography.Text className="author">{'tipOfTheDayAuthor'}</Typography.Text>
      </div>
    </div>
  );
};

export default Home;
