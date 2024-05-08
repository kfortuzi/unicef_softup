import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { Certificate } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';
import DeleteItemButton from 'src/components/common/DeleteItemButton/DeleteItemButton';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import dateTimeFormats from 'src/constants/dateTimeFormats';
import { isValidDate } from 'src/utils/dateUtils';

import { defaultValues } from './constants';
import { FormField } from './enums';
import fieldsValidationSchema from './validation';

type CertificatesFormProps = {
  cvId: string;
  certificates?: Certificate[];
};

const CertificatesForm: React.FC<CertificatesFormProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.certificatesSection' });
  const { handleSubmit, control, setValue, formState: { errors } } = useForm({
    defaultValues: { certificates: props.certificates || [defaultValues] },
    resolver: yupResolver(fieldsValidationSchema),
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'certificates',
    control,
  });

  const addCertificate = () => {
    append(defaultValues);
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => {
    patchResume({ id: props.cvId, certificates: values.certificates });
  });

  const [activeKeys, setActiveKeys] = useState<string[]>();

  useEffect(() => {
    if (errors?.certificates?.length && errors.certificates.length > 0) {
      const errorItems = (errors.certificates as unknown as Certificate[])
        .map((_, index) => fields?.[index]?.id ?? '') ?? [];
      setActiveKeys(errorItems);
    }
  }, [errors?.certificates, fields]);

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `${t('headerSingular')} ${index + 1}`,
      headerClass: `${(errors.certificates as unknown as Certificate[])
        ?.find((_, errorIndex) => errorIndex === index)
        ? 'is-invalid'
        : 'is-valid'}`,
      extra: <DeleteItemButton remove={remove} index={index} />,
      children: (
        <div className="input-element-container">
          <Controller
            control={control}
            name={`certificates.${index}.${FormField.NAME}`}
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
            name={`certificates.${index}.${FormField.RECEIVED_DATE}`}
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('receivedDate')}
                placeholder={t('receivedDate')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={isValidDate(value)}
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
            name={`certificates.${index}.${FormField.EXPIRATION_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label={t('expirationDate')}
                placeholder={t('expirationDate')}
                inputRef={ref}
                name={name}
                value={isValidDate(value)}
                onChange={(dateObject) => {
                  setValue(name, dateObject?.format(dateTimeFormats.backendDate));
                }}
                format={dateTimeFormats.albanianDate}
                className="input-element"
              />
            )}
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
        <Button
          type="default"
          text={t('addButtonTitle')}
          onClick={addCertificate}
          className="add-certificate-button"
        />
      </form>
    </Drawer>
  );
};

export default CertificatesForm;
