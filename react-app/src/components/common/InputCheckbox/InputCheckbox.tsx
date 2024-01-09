import { Checkbox, CheckboxProps } from 'antd';
import { AbstractCheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox/Checkbox';

interface Props extends CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange?: AbstractCheckboxProps<CheckboxChangeEvent>['onChange'];
  className?: string;
}

const InputCheckbox: React.FC<Props> = ({ name, label, checked, onChange, className = '', ...rest }) => (
  <div className={`input-checkbox ${className}`}>
    <Checkbox
      name={name}
      checked={checked}
      onChange={onChange}
      {...rest}
    >
      {label}
    </Checkbox>
  </div>
);

export default InputCheckbox;
