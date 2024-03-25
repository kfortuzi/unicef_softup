import { DatePicker, DatePickerProps, Flex, Typography } from 'antd';
import React from 'react';

interface Props extends DatePickerProps {
  inputRef?: React.Ref<HTMLInputElement>;
  name: string;
  label?: string;
  className?: string;
  error?: string;
}

const InputDatePicker: React.FC<Props> = ({ name, label, onChange, className, error, ...rest }) => {
  let datePickerStatus: DatePickerProps['status'] = rest.status;

  if (error) {
    datePickerStatus = 'error';
  }

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
          status={datePickerStatus}
          {...rest}
        />
        {error && <Typography.Text type="danger">{error}</Typography.Text>}
      </Flex>
    </div>
  );
};

export default InputDatePicker;
