import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Language } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import InputText from 'src/components/common/InputText/InputText';
import { getBaseCvId } from 'src/helpers/baseCvStorage';

import { defaultValues, languageLevels } from './constants';
import { FormField } from './enums';
import fieldsValidationSchema from './validation';

interface LanguagesProps {
  languages?: Language[];
}

const LanguagesForm: React.FC<LanguagesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.languagesSection' });
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      languages: props.languages || [],
    },
    resolver: yupResolver(fieldsValidationSchema),
    shouldFocusError: false,
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
    patchResume({ id: getBaseCvId(), languages: values.languages as Language[] }),
  );

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `${t('headerSingular')} ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`languages.${index}.${FormField.NAME}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('name')}
                inputRef={ref}
                error={error?.message}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={t('name')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`languages.${index}.${FormField.IS_NATIVE}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputSelect
                label={t('isNative')}
                inputRef={ref}
                error={error?.message}
                name={name}
                value={Number(value)}
                onChange={onChange}
                options={[
                  { label: t('yes'), value: 1 },
                  { label: t('no'), value: 0 },
                ]}
                className="input-element"
              />
            )}
          />
          {!watch(`languages.${index}.${FormField.IS_NATIVE}`) && (
            <>
              <Controller
                control={control}
                name={`languages.${index}.${FormField.READING}`}
                render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                  <InputSelect
                    label={t('reading')}
                    inputRef={ref}
                    error={error?.message}
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={languageLevels}
                    className="input-element"
                    placeholder={t('reading')}
                  />
                )}
              />
              <Controller
                control={control}
                name={`languages.${index}.${FormField.WRITING}`}
                render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                  <InputSelect
                    label={t('writing')}
                    inputRef={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                    options={languageLevels}
                    className="input-element"
                    placeholder={t('writing')}
                    error={error?.message}
                  />
                )}
              />
              <Controller
                control={control}
                name={`languages.${index}.${FormField.SPEAKING}`}
                render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                  <InputSelect
                    label={t('speaking')}
                    placeholder={t('speaking')}
                    error={error?.message}
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
          <Button
            type="default"
            text={t('removeButtonTitle')}
            onClick={() => remove(index)}
            className="add-remove-language-button"
          />
        </div>
      ),
    };
  });

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title={t('headerPlural')}
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
        text={t('addButtonTitle')}
        onClick={addLanguage}
        className="add-remove-language-button"
      />
    </Drawer>
  );
};

export default LanguagesForm;
