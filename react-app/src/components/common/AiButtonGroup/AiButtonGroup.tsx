import { RobotOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import React from 'react';

import Button from '../Button/Button';
import { autoGenerate } from './helpers/autogenerate';

type AiButtonGroupProps = {
  autogenerateOnClick: (text: string) => void;
  askWizardOnClick: (text: string) => void;
};

const AiButtonGroup: React.FC<AiButtonGroupProps> = ({ autogenerateOnClick, askWizardOnClick }) => {
  const handleGenerate = () => {
    autogenerateOnClick(autoGenerate('text'));
  };

  const handleAskWizard = () => {
    askWizardOnClick('text');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <a onClick={() => handleGenerate()}>Auto generate</a>,
    },
    {
      key: '2',
      label: <a onClick={() => handleAskWizard()}>Ask wizard</a>,
    },
  ];

  return (
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
  );
};

export default AiButtonGroup;
