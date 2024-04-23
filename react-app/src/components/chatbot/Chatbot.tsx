import { RobotOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React, { useState } from 'react';

import usePostChatbot from 'src/api/chatbot/hooks/usePostChatbot';

import AskWizardModal from '../common/AskWizardModal/AskWizardModal';

const Chatbot: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [firstChatbotConversationMessage, setFirstChatbotConversationMessage] = useState(true);
  const { mutateAsync: postChatbotAsync } = usePostChatbot();

  const sendMessageAndGetAiPrompt = async (text: string): Promise<string | undefined> => {
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
        icon={<RobotOutlined />}
        type="primary"
        style={{ right: 50, top: 450, width: 50, height: 50 }}
        onClick={openChatbot}
      />
      <AskWizardModal
        open={isOpen}
        setOpen={setOpen}
        sendMessageAndGetAiPrompt={sendMessageAndGetAiPrompt}
        isMainChatbot={true}
      />
    </>
  );
};

export default Chatbot;
