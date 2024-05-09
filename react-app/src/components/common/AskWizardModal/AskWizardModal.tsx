import { RightOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons';
import { Modal, Typography, ModalProps } from 'antd';
import Search from 'antd/es/input/Search';
import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { wrapLinks } from 'src/utils/wrapLinks';

import Button from '../Button/Button';
import MainChatbotMessages from './MainChatBotMessages';

type Message = {
  text: string;
  type: string;
  isUsable: boolean;
};

type AskWizardModalProps = ModalProps & {
  sendMessageAndGetAiPrompt: (message: string) => Promise<string | undefined>;
  updateMessageText?: (message: string, content?: string) => void;
  setOpen: (open: boolean) => void;
  open: boolean;
  isMainChatbot?: boolean;
};

const AskWizardModal: React.FC<AskWizardModalProps> = ({
  sendMessageAndGetAiPrompt,
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
    let aiMessage: Message;
    setMessages([...messages, userMessage]);
    try {
      const systemMessage = await sendMessageAndGetAiPrompt(text);
      aiMessage = { text: systemMessage, type: 'ai', isUsable: true } as Message;
    } catch (error: unknown) {
      const { message } = error as Error;
      if (message === 'Limit 7 messages per 8 hours reached!') {
        aiMessage = { text: t('aiLimitReached'), type: 'ai', isUsable: false } as Message;
      } else {
        aiMessage = { text: t('aiErrorMessage'), type: 'ai', isUsable: false } as Message;
      }
    } finally {
      setLoading(false);
    }
    setMessages([...messages, userMessage, aiMessage]);
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
    <div>
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
          {isMainChatbot ? <MainChatbotMessages askWizard={askWizard} /> : null}
          {messages.map((message, i) => (
            <div key={`message-${i}`}>
              <div
                className={`ask-wizard-message ${message.type === 'ai' ? 'ai' : 'user'}`}
                style={{ flexDirection: message.type === 'ai' ? 'row' : 'row-reverse' }}
                key={i}
              >
                <div className="ask-wizard-icon">
                  {message.type === 'ai' ? <RobotOutlined /> : <UserOutlined />}
                </div>
                <div className="ask-wizard-message-container">
                  <div className="ask-wizard-message-text">
                    <Typography.Paragraph style={{ whiteSpace: 'pre-wrap' }}>
                      {parse(wrapLinks(message.text))}
                    </Typography.Paragraph>
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
    </div>
  );
};

export default AskWizardModal;
