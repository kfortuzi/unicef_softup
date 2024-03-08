import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Language } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import InputText from 'src/components/common/InputText/InputText';

import { defaultValues, languageLevels } from './constants';
import { FormField } from './enums';

interface LanguagesProps {
  languages: Language[];
}

const LanguagesForm: React.FC<LanguagesProps> = (props) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      languages: props.languages,
    },
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'languages',
    control,
  });

  const addLanguage = () => {
    append(defaultValues);
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: '', languages: values.languages as Language[] }),
  );

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `Language ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`languages.${index}.${FormField.NAME}`}
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
            name={`languages.${index}.${FormField.IS_NATIVE}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputSelect
                label="Is Native?"
                inputRef={ref}
                name={name}
                value={Number(value)}
                onChange={onChange}
                options={[
                  { label: 'Yes', value: 1 },
                  { label: 'No', value: 0 },
                ]}
                className="input-element"
              />
            )}
          />
          {!watch(`languages.${index}.${FormField.IS_NATIVE}`).valueOf() && (
            <>
              <Controller
                control={control}
                name={`languages.${index}.${FormField.READING}`}
                render={({ field: { name, value, onChange, ref } }) => (
                  <InputSelect
                    label="Reading"
                    inputRef={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={languageLevels}
                    className="input-element"
                  />
                )}
              />
              <Controller
                control={control}
                name={`languages.${index}.${FormField.WRITING}`}
                render={({ field: { name, value, onChange, ref } }) => (
                  <InputSelect
                    label="Writing"
                    inputRef={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={languageLevels}
                    className="input-element"
                  />
                )}
              />
              <Controller
                control={control}
                name={`languages.${index}.${FormField.SPEAKING}`}
                render={({ field: { name, value, onChange, ref } }) => (
                  <InputSelect
                    label="Speaking"
                    inputRef={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={languageLevels}
                    className="input-element"
                  />
                )}
              />
            </>
          )}
          {index > 0 && (
            <Button
              type="default"
              text="Remove"
              onClick={() => remove(index)}
              className="add-remove-language-button"
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
      title="Languages"
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
        text="Add Another Language"
        onClick={addLanguage}
        className="add-remove-language-button"
      />
    </Drawer>
  );
};

export default LanguagesForm;
