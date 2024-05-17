import { Button as AntButton, ButtonProps, Typography } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import React, { MouseEventHandler } from 'react';

interface Props extends ButtonProps {
  type?: BaseButtonProps['type'];
  text?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  htmlType?: ButtonProps['htmlType'];
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<Props> = ({
  type,
  text,
  onClick,
  htmlType,
  loading = false,
  icon,
  className = '',
  ...rest
}) => (
  <div className={`common-button ${className}`}>
    <AntButton
      type={type}
      onClick={onClick}
      htmlType={htmlType}
      loading={loading}
      icon={icon}
      {...rest}
    >
      {text && <Typography.Text ellipsis={{ tooltip: true }}>{text}</Typography.Text>}
    </AntButton>
  </div>
);

export default Button;
