import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Certification } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { defaultValues } from './constants';
import { FormField } from './enums';

type CertificationsFormProps = {
  certifications?: Certification[];
};

const CertificationsForm: React.FC<CertificationsFormProps> = (props) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: { certifications: props.certifications },
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'certifications',
    control,
  });

  const addCertification = () => {
    append(defaultValues);
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => {
    patchResume({ id: '', certifications: values.certifications });
  });

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `Certification ${index}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`certifications.${index}.${FormField.NAME}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label="Name"
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={'Name'}
              />
            )}
          />
          <Controller
            control={control}
            name={`certifications.${index}.${FormField.RECEIVED_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label="Received Date"
                inputRef={ref}
                name={name}
                value={value ? dayjs(value) : undefined}
                onChange={(dateObject) => {
                  setValue(name, dateObject.format(dateTimeFormats.backendDate));
                }}
                format={dateTimeFormats.albanianDate}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`certifications.${index}.${FormField.EXPIRATION_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label="Expiration Date"
                inputRef={ref}
                name={name}
                value={value ? dayjs(value) : undefined}
                onChange={(dateObject) => {
                  setValue(name, dateObject?.format(dateTimeFormats.backendDate));
                }}
                format={dateTimeFormats.albanianDate}
                className="input-element"
              />
            )}
          />
          {index > 0 && (
            <Button
              type="default"
              text="Remove"
              onClick={() => remove(index)}
              className="add-remove-certification-button"
            />
          )}
        </div>
      ),
    };
  });

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title="Certifications"
    >
      <form onSubmit={submitForm}>
        <Collapse
          accordion
          items={items}
          defaultActiveKey={fields[0]?.id}
        />
        <Button
          type="default"
          text="Add Certification"
          onClick={addCertification}
          className="add-remove-certification-button"
        />
      </form>
    </Drawer>
  );
};

export default CertificationsForm;
