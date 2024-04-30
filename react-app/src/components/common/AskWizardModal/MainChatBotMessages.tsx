import { RobotOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';

type MainChatbotMessagesProps = {
  askWizard: (text: string) => void;
};

const MainChatbotMessages: React.FC<MainChatbotMessagesProps> = ({ askWizard }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'chatbot' });
  const navigate = useNavigate();

  const topicSelectionOptions = [
    <Button
      type="default"
      text={t('jobOpportunities')}
      icon={<span className="icon">💼</span>}
      className="topic-button"
      onClick={() => navigate('/jobs')}
    />,
    <Button
      type="default"
      text={t('craftResume')}
      icon={<span className="icon">🏅</span>}
      className="topic-button"
      onClick={() => navigate('/profile-settings/my-resume')}
    />,
    <Button
      type="default"
      text={t('careerAdvice')}
      icon={<span className="icon">🔎</span>}
      className="topic-button"
      onClick={() => askWizard(t('careerAdviceMessage'))}
    />,
  ];

  return (
    <div className="ask-wizard-messages">
      {topicSelectionOptions.map((option, i) => (
        <div
          className={'ask-wizard-message ai'}
          style={{ flexDirection: 'row' }}
          key={'topic-selection-option-' + i}
        >
          <div className="ask-wizard-icon">
            <RobotOutlined />
          </div>
          <div className="ask-wizard-message-container">
            <div className="ask-wizard-message-text">{option}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainChatbotMessages;
