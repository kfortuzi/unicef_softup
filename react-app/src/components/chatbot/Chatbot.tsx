import { FloatButton } from 'antd';
import React, { useState } from 'react';
import { VscRobot } from 'react-icons/vsc';

import usePostChatbot from 'src/api/chatbot/hooks/usePostChatbot';

import AskWizardModal from '../common/AskWizardModal/AskWizardModal';

const Chatbot: React.FC = () => {
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

  return (
    <>
      <FloatButton
        icon={
          <VscRobot
            size={30}
            style={{ marginLeft: -5 }}
          />
        }
        type="primary"
        style={{ right: 50, bottom: 50, width: 50, height: 50 }}
        onClick={openChatbot}
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

export default Chatbot;
