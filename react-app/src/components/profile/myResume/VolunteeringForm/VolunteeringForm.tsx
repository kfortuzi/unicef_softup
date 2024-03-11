import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Volunteering } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { defaultValues } from './constants';
import { FormField } from './enums';

interface VolunteeringProps {
  volunteering: Volunteering[];
}

const VolunteeringForm: React.FC<VolunteeringProps> = (props) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      volunteering: props.volunteering,
    },
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'volunteering',
    control,
  });

  const addVolunteering = () => {
    append(defaultValues);
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: '', volunteering: values.volunteering as Volunteering[] }),
  );

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `Volunteering ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.ROLE}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Name"
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'Name'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.ORGANIZATION}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Organization"
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'Organization'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.ICON}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Icon"
                inputRef={ref}
                name={name}
                value={value || ''}
                onChange={onChange}
                placeholder={'Icon'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.START_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label="Start Date"
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
            name={`volunteering.${index}.${FormField.END_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label="End Date"
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
          {index > 0 && (
            <Button
              type="default"
              text="Remove"
              onClick={() => remove(index)}
              className="add-remove-volunteering-button"
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
      title="Volunteering"
    >
      <form onSubmit={submitForm}>
        <Collapse
          accordion
          items={items}
          defaultActiveKey={fields[0]?.id}
        />
      </form>
      <Button
        type="default"
        text="Add Another Volunteering"
        onClick={addVolunteering}
        className="add-remove-volunteering-button"
      />
    </Drawer>
  );
};

export default VolunteeringForm;
