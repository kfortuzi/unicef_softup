import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Volunteering } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { defaultValues } from './constants';
import { FormField } from './enums';
import fieldsValidationSchema from './validation';

interface VolunteeringProps {
  cvId: string;
  volunteering: Volunteering[];
}

const VolunteeringForm: React.FC<VolunteeringProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.volunteeringsSection' });
  const { handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: {
      volunteering: props.volunteering || [defaultValues],
    },
    resolver: yupResolver(fieldsValidationSchema),
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
    patchResume({ id: props.cvId, volunteering: values.volunteering as Volunteering[] }),
  );

  const [activeKeys, setActiveKeys] = useState<string[]>();

  useEffect(() => {
    if (errors?.volunteering?.length && errors.volunteering.length > 0) {
      const errorItems = (errors.volunteering as unknown as Volunteering[])
        .map((_, index) => fields?.[index]?.id ?? '') ?? [];
      setActiveKeys(errorItems);
    }
  }, [errors?.volunteering, fields]);

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `${t('headerSingular')} ${index + 1}`,
      headerClass: `${(errors.volunteering as unknown as Volunteering[])
        ?.find((_, errorIndex) => errorIndex === index)
        ? 'is-invalid'
        : 'is-valid'}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.ROLE}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('role')}
                inputRef={ref}
                error={error?.message}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={t('role')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.ORGANIZATION}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('organization')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={value}
                onChange={onChange}
                placeholder={t('organization')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.START_DATE}`}
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('startDate')}
                placeholder={t('startDate')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={value ? dayjs(value) : undefined}
                onChange={(dateObject) => {
                  setValue(name, dateObject?.format(dateTimeFormats.backendDate));
                }}
                format={dateTimeFormats.albanianDate}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`volunteering.${index}.${FormField.END_DATE}`}
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('endDate')}
                placeholder={t('endDate')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={value ? dayjs(value) : undefined}
                onChange={(dateObject) => {
                  setValue(name, dateObject?.format(dateTimeFormats.backendDate));
                }}
                format={dateTimeFormats.albanianDate}
                className="input-element"
              />
            )}
          />
          <Button
            type="default"
            text={t('removeButtonTitle')}
            onClick={() => remove(index)}
            className="add-remove-volunteering-button"
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
          items={items}
          defaultActiveKey={fields[0]?.id}
          onChange={(keys) => setActiveKeys(keys as string[])}
          activeKey={activeKeys}
        />
      </form>
      <Button
        type="default"
        text={t('addButtonTitle')}
        onClick={addVolunteering}
        className="add-remove-volunteering-button"
      />
    </Drawer>
  );
};

export default VolunteeringForm;
