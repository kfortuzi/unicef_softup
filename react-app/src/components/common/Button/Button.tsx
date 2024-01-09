import { Button as AntButton, ButtonProps } from 'antd';
import { BaseButtonProps } from 'antd/es/button/button';
import { MouseEventHandler } from 'react';

interface Props extends ButtonProps {
  type: BaseButtonProps['type'];
  text: string;
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
      {text}
    </AntButton>
  </div>
);

export default Button;
