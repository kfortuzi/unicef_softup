import React from 'react';
import { useTranslation } from 'react-i18next';

import { Language } from 'src/api/resumes/types';

type LanguageItemProps = Language;

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.languagesSection' });
  const { name, reading, writing, speaking } = props;

  return (
    <div>
      <p className="language-title">{name}</p>
      <div className="language-level-container">
        <p className="language-level-text">{t('reading')}</p>
        <p>{reading}</p>
      </div>
      <div className="language-level-container">
        <p className="language-level-text">{t('writing')}</p>
        <p>{writing}</p>
      </div>
      <div className="language-level-container">
        <p className="language-level-text">{t('speaking')}</p>
        <p>{speaking}</p>
      </div>
    </div>
  );
};

export default LanguageItem;
