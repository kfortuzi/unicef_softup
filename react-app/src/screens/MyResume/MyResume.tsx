import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';
import i18n from 'src/locales';

const MyResume: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <div className="container">
      <div className="header">
        <h1>{t('header')}</h1>
      </div>
      <div className="content"></div>
      <div className="button-group">
        <Button
          type="default"
          htmlType="button"
          text={i18n.t('globalStrings.edit')}
        />
        <Button
          type="default"
          htmlType="button"
          text={i18n.t('globalStrings.download')}
        />
      </div>
    </div>
  );
};

export default MyResume;
