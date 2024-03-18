import { Flex, InputRef, Typography } from 'antd';
import { TextAreaProps } from 'antd/es/input';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';

interface Props extends TextAreaProps {
  inputRef?: React.Ref<InputRef>;
  name: string;
  value: string;
  placeholder?: string;
  label?: string;
  className?: string;
}

const InputText: React.FC<Props> = ({
  inputRef,
  name,
  value,
  placeholder,
  label,
  className = '',
  ...rest
}) => {
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
          {...rest}
        />
      </Flex>
    </div>
  );
};

export default InputText;
