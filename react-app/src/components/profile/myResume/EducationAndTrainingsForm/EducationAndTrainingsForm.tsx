import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Education } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { FormField } from './enums';

type EducationAndTrainingsFormProps = {
  educationAndTrainings: Education[];
};

const EducationAndTrainingsForm: React.FC<EducationAndTrainingsFormProps> = (props) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: { educations: props.educationAndTrainings },
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'educations',
    control,
  });

  const addEducation = () => {
    append({
      [FormField.TITLE]: '',
      [FormField.TYPE]: '',
      [FormField.LOCATION]: '',
      [FormField.START_DATE]: '',
      [FormField.END_DATE]: '',
    });
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: '', educations: values.educations as Education[] }),
  );

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `Education ${index}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`educations.${index}.${FormField.TITLE}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label="Title"
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={'Title'}
              />
            )}
          />
          <Controller
            control={control}
            name={`educations.${index}.${FormField.TYPE}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label="Education Type"
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={'Education Type'}
              />
            )}
          />
          <Controller
            control={control}
            name={`educations.${index}.${FormField.LOCATION}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label="Location"
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={'Location'}
              />
            )}
          />
          <Controller
            control={control}
            name={`educations.${index}.${FormField.START_DATE}`}
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
            name={`educations.${index}.${FormField.END_DATE}`}
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
              className="add-another-education-button"
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
      title="Education and Trainings"
    >
      <form onSubmit={submitForm}>
        <Collapse
          accordion
          items={items}
          defaultActiveKey={fields[0]?.id}
        />
        <Button
          type="default"
          text="Add Another Education"
          onClick={addEducation}
          className="add-another-education-button"
        />
      </form>
    </Drawer>
  );
};

export default EducationAndTrainingsForm;
