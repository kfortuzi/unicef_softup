import { Flex, Spin, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

interface Params {
  message?: string;
}

const LoadingFullPage: React.FC<Params> = ({ message }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'globalStrings' });

  return (
    <div className="loading-full-page-container">
      <Flex
        vertical
        gap="middle"
      >
        <Spin size="large" />
        <Typography.Text>{message || t('loading')}</Typography.Text>
      </Flex>
    </div>
  );
};

export default LoadingFullPage;
