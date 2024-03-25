import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Education } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { FormField } from './enums';
import validationSchema from './validation';

type EducationAndTrainingsFormProps = {
  educationAndTrainings: Education[];
};

const EducationAndTrainingsForm: React.FC<EducationAndTrainingsFormProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.educationAndTrainingsSection' });
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: { educations: props.educationAndTrainings },
    resolver: yupResolver(validationSchema),
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
      label: `${t('headerSingular')} ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`educations.${index}.${FormField.TITLE}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('title')}
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('title')}
              />
            )}
          />
          <Controller
            control={control}
            name={`educations.${index}.${FormField.TYPE}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('type')}
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('type')}
              />
            )}
          />
          <Controller
            control={control}
            name={`educations.${index}.${FormField.LOCATION}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('location')}
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('location')}
              />
            )}
          />
          <Controller
            control={control}
            name={`educations.${index}.${FormField.START_DATE}`}
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
            name={`educations.${index}.${FormField.END_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label={t('endDate')}
                placeholder={t('endDate')}
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
              text={t('removeButtonTitle')}
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
      title={t('headerPlural')}
    >
      <form onSubmit={submitForm}>
        <Collapse
          accordion
          items={items}
          defaultActiveKey={fields[0]?.id}
        />
        <Button
          type="default"
          text={t('addButtonTitle')}
          onClick={addEducation}
          className="add-another-education-button"
        />
      </form>
    </Drawer>
  );
};

export default EducationAndTrainingsForm;
