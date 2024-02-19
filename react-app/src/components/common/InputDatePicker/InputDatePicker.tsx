import { DatePicker, DatePickerProps, Flex, Typography } from 'antd';
import React from 'react';

interface Props extends DatePickerProps {
  inputRef?: React.Ref<HTMLInputElement>;
  name: string;
  label?: string;
  className?: string;
}

const InputDatePicker: React.FC<Props> = ({ name, label, onChange, className, ...rest }) => {
  return (
    <div className={`input-datepicker ${className}`}>
      <Flex vertical>
        {label && (
          <label htmlFor={name}>
            <Typography.Text>{label}</Typography.Text>
          </label>
        )}
        <DatePicker
          name={name}
          onChange={onChange}
          {...rest}
        />
      </Flex>
    </div>
  );
};

export default InputDatePicker;
