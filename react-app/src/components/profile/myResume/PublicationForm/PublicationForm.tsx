import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Publication } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { defaultValues } from './constants';
import { FormField } from './enums';

interface PublicationsProps {
  publications: Publication[];
}

const PublicationsForm: React.FC<PublicationsProps> = (props) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      publications: props.publications,
    },
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'publications',
    control,
  });

  const addPublication = () => {
    append(defaultValues);
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: '', publications: values.publications as Publication[] }),
  );

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `Publication ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`publications.${index}.${FormField.NAME}`}
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
            name={`publications.${index}.${FormField.RELEASE_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label="Release Date"
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
            name={`publications.${index}.${FormField.LINK}`}
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
          {index > 0 && (
            <Button
              type="default"
              text="Remove"
              onClick={() => remove(index)}
              className="add-remove-publication-button"
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
      title="Publications"
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
        text="Add Another Publication"
        onClick={addPublication}
        className="add-remove-publication-button"
      />
    </Drawer>
  );
};

export default PublicationsForm;
