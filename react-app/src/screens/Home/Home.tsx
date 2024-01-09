import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'home' });

  return (
    <div className="home-container">
      <Typography.Title>{t('header')}</Typography.Title>
      <Typography.Paragraph>{t('appDescription')}</Typography.Paragraph>
    </div>
  );
};

export default Home;
