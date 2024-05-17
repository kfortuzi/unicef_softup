import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import usePostChatbot from 'src/api/chatbot/hooks/usePostChatbot';

import AskWizardModal from '../common/AskWizardModal/AskWizardModal';
import Button from '../common/Button/Button';

const Chatbot: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'chatbot' });

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
      <Button
        type="primary"
        size="large"
        className="chatbot-button"
        onClick={openChatbot}
        text={t('buttonText')}
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
