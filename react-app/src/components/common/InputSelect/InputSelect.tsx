import { Flex, Select, SelectProps, Typography } from 'antd';
import React from 'react';

interface Props extends SelectProps {
  label: string;
  className?: string;
}

const InputSelect: React.FC<Props> = ({ label, onChange, className = '', ...rest }) => (
  <div className={`input-select ${className}`}>
    <Flex vertical>
      {label && (
        <label>
          <Typography.Text>{label}</Typography.Text>
        </label>
      )}
      <Select
        placeholder={label}
        className="select"
        onChange={onChange}
        {...rest}
      ></Select>
    </Flex>
  </div>
);

export default InputSelect;
