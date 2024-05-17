import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { VscRobot } from 'react-icons/vsc';
import { useLocation } from 'react-router-dom';

import usePostChatbot from 'src/api/chatbot/hooks/usePostChatbot';
import { Route } from 'src/router/enums';

import AskWizardModal from '../common/AskWizardModal/AskWizardModal';
import Button from '../common/Button/Button';

const FloatingChatbot: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'chatbot' });
  const location = useLocation();

  const [isOpen, setOpen] = useState(false);
  const [firstChatbotConversationMessage, setFirstChatbotConversationMessage] = useState(true);

  const { mutateAsync: postChatbotAsync } = usePostChatbot();

  const sendMessageAndGetAiPrompt = async (text: string): Promise<unknown> => {
    const data = await postChatbotAsync({
      message: text,
      firstChatbotConversationMessage,
    });

    setFirstChatbotConversationMessage(false);

    if (data) {
      return data;
    }
  };

  const openChatbot = () => {
    setOpen(true);
  };

  if (location.pathname === `${Route.ROOT}${Route.HOME}`) {
    return null;
  }

  return (
    <>
      <Button
        type="primary"
        size="large"
        shape="circle"
        className="floating-chatbot-button"
        onClick={openChatbot}
        icon={
          <Tooltip
            placement="topLeft"
            title={t('buttonText')}
          >
            <div className="robot-icon">
              <VscRobot />
            </div>
          </Tooltip>
        }
      />
      <AskWizardModal
        open={isOpen}
        setOpen={setOpen}
        sendMessagesToTheMainChatbotGetAiPrompt={sendMessageAndGetAiPrompt}
        isMainChatbot={true}
      />
    </>
  );
};

export default FloatingChatbot;
