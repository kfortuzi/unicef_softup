import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Language } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import DeleteItemButton from 'src/components/common/DeleteItemButton/DeleteItemButton';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import languageLevels from 'src/constants/languageLevels';
import languageOptions from 'src/constants/languageOptions';

import { defaultValues } from './constants';
import { FormField } from './enums';
import generateDefaultValues from './helpers/generateDefaultValues';
import fieldsValidationSchema from './validation';

interface LanguagesProps {
  cvId: string;
  languages?: Language[];
}

const LanguagesForm: React.FC<LanguagesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.languagesSection' });
  const { handleSubmit, control, watch, reset, formState: { errors } } = useForm({
    defaultValues: {
      languages: generateDefaultValues(props.languages),
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
  const submitForm = handleSubmit((values) => {
    const requestBody = values.languages.map((language) => ({ ...language, name: language.name?.[0] }))

    patchResume({ id: props.cvId, languages: requestBody as Language[] })
  });

  const [activeKeys, setActiveKeys] = useState<string[]>();

  useEffect(() => {
    if (errors?.languages?.length && errors.languages.length > 0) {
      const errorItems = (errors.languages as unknown as Language[])
        .map((_, index) => fields?.[index]?.id ?? '') ?? [];
      setActiveKeys(errorItems);
    }
  }, [errors?.languages, fields]);

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `${t('headerSingular')} ${index + 1}`,
      headerClass: `${(errors.languages as unknown as Language[])
        ?.find((_, errorIndex) => errorIndex === index)
        ? 'is-invalid'
        : 'is-valid'}`,
      extra: <DeleteItemButton remove={remove} index={index} />,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`languages.${index}.${FormField.NAME}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputSelect
                label={t('name')}
                placeholder={t('name')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={value}
                onChange={onChange}
                tokenSeparators={[',']}
                maxCount={1}
                mode="tags"
                options={languageOptions}
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
        </div>
      ),
    };
  });

  return (
    <Drawer
      resetForm={reset}
      submitForm={submitForm}
      isPending={isPending}
      title={t('headerPlural')}
    >
      <form onSubmit={submitForm}>
        <Collapse
          items={items}
          defaultActiveKey={fields[0]?.id}
          onChange={(keys) => setActiveKeys(keys as string[])}
          activeKey={activeKeys}
        />
      </form>
      <Button
        type="default"
        text={t('addButtonTitle')}
        onClick={addLanguage}
        className="add-language-button"
      />
    </Drawer>
  );
};

export default LanguagesForm;
