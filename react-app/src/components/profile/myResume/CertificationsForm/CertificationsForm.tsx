import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import dayjs from 'dayjs';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Certification } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import { defaultValues } from './constants';
import { FormField } from './enums';
import fieldsValidationSchema from './validation';

type CertificationsFormProps = {
  certifications?: Certification[];
};

const CertificationsForm: React.FC<CertificationsFormProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.certificationsSection' });
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: { certifications: props.certifications || [] },
    resolver: yupResolver(fieldsValidationSchema),
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'certifications',
    control,
  });

  const addCertification = () => {
    append(defaultValues);
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => {
    patchResume({ id: '', certifications: values.certifications });
  });

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `${t('headerSingular')} ${index + 1}`,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`certifications.${index}.${FormField.NAME}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('name')}
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('name')}
              />
            )}
          />
          <Controller
            control={control}
            name={`certifications.${index}.${FormField.RECEIVED_DATE}`}
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('receivedDate')}
                placeholder={t('receivedDate')}
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
            name={`certifications.${index}.${FormField.EXPIRATION_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label={t('expirationDate')}
                placeholder={t('expirationDate')}
                inputRef={ref}
                name={name}
                value={value ? dayjs(value) : undefined}
                onChange={(dateObject) => {
                  setValue(name, dateObject?.format(dateTimeFormats.backendDate));
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
              className="add-remove-certification-button"
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
          onClick={addCertification}
          className="add-remove-certification-button"
        />
      </form>
    </Drawer>
  );
};

export default CertificationsForm;
