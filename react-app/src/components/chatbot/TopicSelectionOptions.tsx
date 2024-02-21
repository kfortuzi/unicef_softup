import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';

const TopicSelectionOptions: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'chatbot' });

  return (
    <div className="topic-selection-options">
      <Button
        type="default"
        text={t('jobOpportunities')}
        icon={<span className="icon">💼</span>}
        className="topic-button"
      />
      <Button
        type="default"
        text={t('craftResume')}
        icon={<span className="icon">🏅</span>}
        className="topic-button"
      />
      <Button
        type="default"
        text={t('careerAdvice')}
        icon={<span className="icon">🔎</span>}
        className="topic-button"
      />
    </div>
  );
};

export default TopicSelectionOptions;
