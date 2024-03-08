import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Flex, GetRef, Select, SelectProps, Tooltip, Typography } from 'antd';
import React from 'react';

interface Props extends SelectProps {
  inputRef?: React.Ref<GetRef<typeof Select>>;
  name: string;
  error?: string;
  options?: SelectProps['options'];
  onChange?: SelectProps['onChange'];
  placeholder?: string;
  label?: string;
  className?: string;
  allowClear?: boolean;
}

const InputSelect: React.FC<Props> = ({
  inputRef,
  name,
  error,
  value,
  onChange,
  options,
  placeholder,
  label,
  className = '',
  allowClear = true,
  ...rest
}) => {
  let inputStatus: SelectProps['status'] = rest.status;
  let inputSuffix: SelectProps['suffixIcon'] = rest.suffixIcon;

  if (error) {
    inputStatus = 'error';
    inputSuffix = (
      <Tooltip title={error}>
        <ExclamationCircleOutlined className="error-icon" />
      </Tooltip>
    );
  }

  return (
    <div className={`input-select ${className}`}>
      <Flex vertical>
        {label && (
          <label htmlFor={name}>
            <Typography.Text>{label}</Typography.Text>
          </label>
        )}
        <Select
          ref={inputRef}
          id={name}
          value={value}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          status={inputStatus}
          suffixIcon={inputSuffix}
          allowClear={allowClear}
          {...rest}
        />
      </Flex>
    </div>
  );
};

export default InputSelect;
