import { RobotOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { useTranslation } from 'react-i18next';

import TypingIndicator from '../common/TypingIndicator/TypingIndicator.tsx';
import TopicSelectionOptions from './TopicSelectionOptions.tsx';

const ChatBody: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'chatbot' });

  return (
    <div className="chat-body">
      <div className="topic-selection">
        <div className="message">
          <RobotOutlined className="icon bot-icon" />
          <p className="message-content welcome-message">{t('welcomeMessage')}</p>
        </div>
        <TopicSelectionOptions />
      </div>
      <div className="message prompt">
        <UserOutlined className="icon user-icon" />
        <p className="message-content">{`I want to explore job opportunities.`}</p>
      </div>
      <div className="message response">
        <RobotOutlined className="icon bot-icon" />
        <p className="message-content">{`Great! Here are some options for you:\n\nhttps://jobs.com`}</p>
      </div>
      <div className="message prompt">
        <UserOutlined className="icon user-icon" />
        <p className="message-content">{`I want a job in Tirana.`}</p>
      </div>
      <div className="message response">
        <RobotOutlined className="icon bot-icon" />
        <p className="message-content">
          {`I found some options for you in Tirana:\n\nhttps://jobs_in_tirana.com`}
        </p>
      </div>
      <div className="message prompt">
        <UserOutlined className="icon user-icon" />
        <p className="message-content">
          {`These positions look interesting.\n\nGive me some details on each.`}
        </p>
      </div>
      <div className="message response">
        <RobotOutlined className="icon bot-icon" />
        <p className="message-content">
          <TypingIndicator className="generating-response-indicator" />
        </p>
      </div>
    </div>
  );
};

export default ChatBody;
