import { RightOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Modal, Typography, Button as AntButton } from 'antd';
import Search from 'antd/es/input/Search';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from '../Button/Button';

type Message = {
  text: string;
  type: string;
  isUsable: boolean;
};

type AskWizardModalProps = {
  autoGenerateOnClick: VoidFunction;
  sendMessageOnclick: (message: string) => Promise<string | undefined>;
  useOnClick: (message: string, content?: string) => void;
};

const AskWizardModal: React.FC<AskWizardModalProps> = ({
  sendMessageOnclick,
  useOnClick,
  autoGenerateOnClick,
}) => {
  const { control, setValue } = useForm();
  const { t } = useTranslation('translation', { keyPrefix: 'askWizardModal' });

  const [messages, setMessages] = useState([] as Message[]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const askWizard = async (text: string) => {
    setLoading(true);
    const systemMessage = await sendMessageOnclick(text);
    setLoading(false);

    const userMessage = { text: text, type: 'user' } as Message;
    const aiMessage = { text: systemMessage, type: 'ai', isUsable: true } as Message;

    setMessages([...messages, userMessage, aiMessage]);
  };

  useEffect(() => {
    setMessages([{ text: t('aiFirstMessage'), type: 'ai', isUsable: false }]);
  }, []);

  const items: MenuProps['items'] = [
    {
      key: 'dropdown-auto-generate-button',
      label: <a onClick={() => autoGenerateOnClick()}>{t('autoGenerateButtonText')}</a>,
    },
    {
      key: 'dropdown-ask-wizard-button',
      label: <a onClick={() => setOpen(true)}>{t('askWizardButtonText')}</a>,
    },
  ];

  return (
    <div>
      <Dropdown
        key={'ask-wizard-dropdown'}
        menu={{ items }}
        placement="bottomLeft"
        trigger={['click']}
        overlayStyle={{ width: 300 }}
      >
        <AntButton
          icon={<RobotOutlined />}
          type="primary"
        >
          {t('enhanceWithAiButtonText')}
        </AntButton>
      </Dropdown>
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
                  await askWizard(value);
                  setValue('chat', '');
                }}
                onSearch={async () => {
                  await askWizard(value);
                  setValue('chat', '');
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
                  {message.type === 'ai' ? <RobotOutlined /> : <UserOutlined />}
                </div>
                <div className="ask-wizard-message-container">
                  <div className="ask-wizard-message-text">
                    <Typography.Paragraph>{message.text}</Typography.Paragraph>
                  </div>
                  {message.type === 'ai' && message.isUsable && (
                    <div className="ask-wizard-button-group">
                      <Button
                        text={t('useButtonText')}
                        type="primary"
                        onClick={() => {
                          // eslint-disable-next-line react-hooks/rules-of-hooks
                          useOnClick(message.text);
                          setOpen(false);
                        }}
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
