import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { WorkExperience } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { FormField } from './enums';
import fieldsValidationSchema from './validation';

interface WorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const WorkExperiencesForm: React.FC<WorkExperiencesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.workExperiencesSection' });
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      experiences: props.workExperiences,
    },
    resolver: yupResolver(fieldsValidationSchema),
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
      label: `${t('headerSingular')} ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.POSITION}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('position')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={value}
                onChange={onChange}
                placeholder={t('position')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.COMPANY}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('company')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={value}
                onChange={onChange}
                placeholder={t('company')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.RESPONSIBILITIES}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label={t('responsibilities')}
                inputRef={ref}
                name={name}
                value={value || ''}
                onChange={onChange}
                placeholder={t('responsibilities')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.START_DATE}`}
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('startDate')}
                placeholder={t('startDate')}
                inputRef={ref}
                name={name}
                error={error?.message}
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
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('endDate')}
                placeholder={t('endDate')}
                inputRef={ref}
                name={name}
                error={error?.message}
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
              text={t('removeButtonTitle')}
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
        onClick={addExperience}
        className="add-remove-experience-button"
      />
    </Drawer>
  );
};

export default WorkExperiencesForm;
