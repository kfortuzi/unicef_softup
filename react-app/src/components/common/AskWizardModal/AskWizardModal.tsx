import { RightOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Modal, Typography } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Button from '../Button/Button';
import InputText from '../InputText/InputText';

type Message = {
  text: string;
  type: string;
};

type AskWizardModalProps = {
  autoGenerateOnClick: VoidFunction;
  responseOnClick: (text: string) => void;
  //content can be used to set the initial value of the input
  content: string;
};

const AskWizardModal: React.FC<AskWizardModalProps> = ({ responseOnClick, content, autoGenerateOnClick }) => {
  const { control, setValue } = useForm();
  const [messages, setMessages] = useState([] as Message[]);
  const askWizard = (text: string) => {
    const userMessage = { text: text, type: 'user' } as Message;
    const aiMessage = { text: "I'm not that smart right now", type: 'ai' } as Message;

    setMessages([...messages, userMessage, aiMessage]);
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={() => autoGenerateOnClick()}>Auto generate</a>,
    },
    {
      key: '2',
      label: <a onClick={() => setOpen(true)}>Ask wizard</a>,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <Dropdown
        menu={{ items }}
        placement="bottom"
        trigger={['click']}
        className="ai-button-group"
      >
        <Button
          text="Enhance with AI"
          icon={<RobotOutlined />}
          type="primary"
        />
      </Dropdown>
      <Modal
        title="Ask Wizard"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={[
          <Controller
            control={control}
            name="content"
            render={({ field: { onChange, value, ref } }) => (
              <InputText
                placeholder="Ask Wizard"
                inputRef={ref}
                name="Ask Wizard"
                value={value}
                onChange={onChange}
                onPressEnter={() => {
                  askWizard(value);
                  setValue('content', '');
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
            <div>
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
                  {message.type === 'ai' && (
                    <div className="ask-wizard-button-group">
                      <Button
                        text="Use"
                        type="primary"
                        onClick={() => {
                          responseOnClick(message.text);
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
    </>
  );
};

export default AskWizardModal;
