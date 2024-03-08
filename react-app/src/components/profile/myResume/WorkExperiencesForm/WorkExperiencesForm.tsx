import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { WorkExperience } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { FormField } from './enums';

interface WorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const WorkExperiencesForm: React.FC<WorkExperiencesProps> = (props) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      experiences: props.workExperiences,
    },
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'experiences',
    control,
  });

  const addExperience = () => {
    append({
      [FormField.POSITION]: '',
      [FormField.COMPANY]: '',
      [FormField.START_DATE]: '',
      [FormField.END_DATE]: '',
      [FormField.RESPONSIBILITIES]: '',
    });
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: '', experiences: values.experiences as WorkExperience[] }),
  );

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `Work Experience ${index}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.POSITION}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Position"
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'Position'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.COMPANY}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Company Name"
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'Company Name'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.RESPONSIBILITIES}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Responsibilities"
                inputRef={ref}
                name={name}
                value={value || ''}
                onChange={onChange}
                placeholder={'Responsibilities'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.START_DATE}`}
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
            name={`experiences.${index}.${FormField.END_DATE}`}
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
              className="add-remove-experience-button"
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
      title="Work Experiences"
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
        text="Add Another Experience"
        onClick={addExperience}
        className="add-remove-experience-button"
      />
    </Drawer>
  );
};

export default WorkExperiencesForm;
