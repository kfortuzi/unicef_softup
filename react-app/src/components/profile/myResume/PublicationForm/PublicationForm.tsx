import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Publication } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { defaultValues } from './constants';
import { FormField } from './enums';
import fieldsValidationSchema from './validation';

interface PublicationsProps {
  publications: Publication[];
}

const PublicationsForm: React.FC<PublicationsProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.publicationsSection' });
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      publications: props.publications,
    },
    resolver: yupResolver(fieldsValidationSchema),
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
      label: `${t('headerSingular')} ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`publications.${index}.${FormField.NAME}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('name')}
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
                placeholder={t('name')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`publications.${index}.${FormField.RELEASE_DATE}`}
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('releaseDate')}
                placeholder={t('releaseDate')}
                error={error?.message}
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
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('link')}
                error={error?.message}
                inputRef={ref}
                name={name}
                value={value || ''}
                onChange={onChange}
                placeholder={t('link')}
                className="input-element"
              />
            )}
          />
          {index > 0 && (
            <Button
              type="default"
              text={t('removeButtonTitle')}
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
        onClick={addPublication}
        className="add-remove-publication-button"
      />
    </Drawer>
  );
};

export default PublicationsForm;
