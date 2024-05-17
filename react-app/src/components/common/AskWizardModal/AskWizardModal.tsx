import { RightOutlined } from '@ant-design/icons';
import { Modal, Typography, ModalProps } from 'antd';
import Search from 'antd/es/input/Search';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaRegUser } from 'react-icons/fa';
import { VscRobot } from 'react-icons/vsc';

import { wrapLinks } from 'src/utils/wrapLinks';

import Button from '../Button/Button';
import MainChatbotMessages from './MainChatBotMessages';

type Message = {
  text: string;
  type: string;
  isUsable: boolean;
};

type AskWizardModalProps = ModalProps & {
  sendMessageAndGetAiPrompt?: (message: string) => Promise<string | undefined>;
  sendMessagesToTheMainChatbotGetAiPrompt?: (message: string) => Promise<unknown>;
  updateMessageText?: (message: string, content?: string) => void;
  setOpen: (open: boolean) => void;
  open: boolean;
  isMainChatbot?: boolean;
};

const AskWizardModal: React.FC<AskWizardModalProps> = ({
  sendMessageAndGetAiPrompt,
  sendMessagesToTheMainChatbotGetAiPrompt,
  updateMessageText,
  setOpen,
  open,
  isMainChatbot = false,
  ...rest
}) => {
  const { control, setValue } = useForm();
  const { t } = useTranslation('translation', { keyPrefix: 'askWizardModal' });

  const [messages, setMessages] = useState([] as Message[]);

  const [loading, setLoading] = useState(false);

  const askWizard = async (text: string) => {
    setLoading(true);
    const userMessage = { text: text, type: 'user' } as Message;
    let aiMessage: Message = { text: '', type: 'ai', isUsable: true };
    setMessages([...messages, userMessage]);
    try {
      let systemMessage;
      if (isMainChatbot && sendMessagesToTheMainChatbotGetAiPrompt) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parsedData: any = await sendMessagesToTheMainChatbotGetAiPrompt(text);
        try {
          const reader = parsedData.getReader();

          let chunks = '';
          // eslint-disable-next-line no-constant-condition
          while (true) {
            const { done, value } = await reader.read();

            if (done) {
              break;
            }

            const chunk = new TextDecoder().decode(value);

            chunks += chunk;

            if (chunk) {
              setMessages([...messages, userMessage, { text: chunks, type: 'ai', isUsable: true }]);
            }
          }
        } catch (error) {
          throw new Error('Error getting chunks');
        }
      } else if (sendMessageAndGetAiPrompt) {
        systemMessage = await sendMessageAndGetAiPrompt(text);
        aiMessage = { text: systemMessage, type: 'ai', isUsable: true } as Message;
        setMessages([...messages, userMessage, aiMessage]);
      }
    } catch (error: unknown) {
      const { message } = error as Error;
      if (message === 'Limit 7 messages per 8 hours reached!') {
        aiMessage = { text: t('aiLimitReached'), type: 'ai', isUsable: false } as Message;
      } else {
        aiMessage = { text: t('aiErrorMessage'), type: 'ai', isUsable: false } as Message;
      }
      setMessages([...messages, userMessage, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  const updateMessageTextAndCloseTheModal = (message: string) => {
    if (updateMessageText) {
      updateMessageText(message);
    }
    setOpen(false);
  };

  useEffect(() => {
    setMessages([{ text: t('aiFirstMessage'), type: 'ai', isUsable: false }]);
  }, [t]);

  return (
    <Modal
      title={t('header')}
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
      key={'ask-wizard-modal'}
      footer={[
        <Controller
          control={control}
          name="chat"
          key={'ask-wizard-input'}
          render={({ field: { onChange, value, ref } }) => (
            <Search
              showCount
              maxLength={100}
              placeholder={t('askWizardPlaceholder')}
              enterButton={t('askWizardButtonText')}
              loading={loading}
              ref={ref}
              name="chat"
              disabled={loading}
              value={value}
              onChange={onChange}
              onPressEnter={async () => {
                if (!value) return;
                setValue('chat', '');
                await askWizard(value);
              }}
              onSearch={async () => {
                if (!value) return;
                setValue('chat', '');
                await askWizard(value);
              }}
              suffix={<RightOutlined />}
            />
          )}
        />,
      ]}
      styles={{
        body: {
          display: 'flex',
          flexDirection: 'column-reverse',
          overflow: 'auto',
          height: 500,
          padding: 20,
        },
      }}
      {...rest}
    >
      <div className="ask-wizard-messages">
        {messages.map((message, i) => (
          <div key={`message-${i}`}>
            <div
              className={`ask-wizard-message ${message.type === 'ai' ? 'ai' : 'user'}`}
              style={{ flexDirection: message.type === 'ai' ? 'row' : 'row-reverse' }}
              key={i}
            >
              <div className="ask-wizard-icon">
                {message.type === 'ai' ? (
                  <VscRobot
                    size={30}
                    color="#e53f25"
                    style={{ marginLeft: -5 }}
                  />
                ) : (
                  <FaRegUser
                    size={25}
                    color="#e53f25"
                    style={{ marginLeft: -5 }}
                  />
                )}
              </div>
              <div className="ask-wizard-message-container">
                <div className="ask-wizard-message-text">
                  <Typography.Paragraph style={{ whiteSpace: 'pre-wrap' }}>
                    {parse(wrapLinks(message.text))}
                  </Typography.Paragraph>
                  {isMainChatbot && i === 0 ? <MainChatbotMessages askWizard={askWizard} /> : null}
                </div>
                {message.type === 'ai' && message.isUsable && !isMainChatbot && (
                  <div className="ask-wizard-button-group">
                    <Button
                      text={t('useButtonText')}
                      type="primary"
                      onClick={() => updateMessageTextAndCloseTheModal(message.text)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default AskWizardModal;
