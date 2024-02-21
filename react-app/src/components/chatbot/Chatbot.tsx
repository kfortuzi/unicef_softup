import { CloseOutlined, MessageOutlined, RobotOutlined } from '@ant-design/icons';
import React, { MouseEventHandler, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ChatBody from './ChatBody';

const Chatbot: React.FC = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'chatbot' });

  const openChat: MouseEventHandler<HTMLSpanElement> = (event) => {
    event?.stopPropagation();
    setChatVisible(true);
  };

  const closeChat: MouseEventHandler<HTMLSpanElement> = (event) => {
    event?.stopPropagation();
    setChatVisible(false);
  };

  const content = chatVisible ? (
    <div className="chat-interface">
      <div className="chat-header">
        <RobotOutlined className="bot-icon" />
        <h3 className="title">{t('header')}</h3>
        <CloseOutlined
          className="close-icon"
          onClick={closeChat}
        />
      </div>
      <ChatBody />
    </div>
  ) : (
    <MessageOutlined className="chatbot-icon" />
  );

  return (
    <div
      className="chatbot"
      onClick={openChat}
    >
      {content}
    </div>
  );
};

export default Chatbot;
