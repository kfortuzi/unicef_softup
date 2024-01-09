import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Flex, Input, InputProps, InputRef, Tooltip, Typography } from 'antd';
import { ChangeEventHandler } from 'react';

interface Props extends InputProps {
  inputRef?: React.Ref<InputRef>;
  name: string;
  value: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  label?: string;
  type?: 'email' | 'password' | 'tel' | 'url';
  className?: string;
}

const InputText: React.FC<Props> = ({
  inputRef,
  name,
  value,
  error,
  onChange,
  placeholder,
  label,
  type,
  className = '',
  ...rest
}) => {
  let inputStatus: InputProps['status'] = rest.status;
  let inputSuffix: InputProps['suffix'] = rest.suffix;

  if (!rest.suffix) {
    inputSuffix = <></>;
  }

  if (error) {
    inputStatus = 'error';
    inputSuffix = (
      <Tooltip title={error}>
        <ExclamationCircleOutlined />
      </Tooltip>
    );
  }

  return (
    <div className={`input-text ${className}`}>
      <Flex vertical>
        {label && (
          <label htmlFor={name}>
            <Typography.Text>{label}</Typography.Text>
          </label>
        )}
        <Input
          ref={inputRef}
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          status={inputStatus}
          suffix={inputSuffix}
          type={type}
          {...rest}
        />
      </Flex>
    </div>
  );
};

export default InputText;
