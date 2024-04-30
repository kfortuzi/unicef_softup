import { Flex, InputRef, Typography } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

interface Props extends TextAreaProps {
  inputRef?: React.Ref<InputRef>;
  name: string;
  value: string;
  error?: string;
  placeholder?: string;
  label?: string;
  className?: string;
  rows?: number;
}

const InputTextArea: React.FC<Props> = ({
  inputRef,
  name,
  value,
  error,
  placeholder,
  label,
  className = '',
  rows = 4,
  ...rest
}) => {
  let textAreaStatus: TextAreaProps['status'] = rest.status;

  if (error) {
    textAreaStatus = 'error';
  }

  return (
    <div className={`input-text-area ${className}`}>
      <Flex vertical>
        {label && (
          <label htmlFor={name}>
            <Typography.Text>{label}</Typography.Text>
          </label>
        )}
        <TextArea
          ref={inputRef}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          status={textAreaStatus}
          rows={rows}
          {...rest}
        />
        {error && <Typography.Text type="danger">{error}</Typography.Text>}
      </Flex>
    </div>
  );
};

export default InputTextArea;
