import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputText from 'src/components/common/InputText/InputText';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';

import { FormField } from './enums';
import validationSchema from './validation';

type ContactInfoFormProps = {
  cvId: string;
  profilePicture?: string;
  firstName?: string;
  email?: string;
  linkedinUrl?: string;
  address?: string;
  phoneNumber?: string;
  lastName?: string;
  nationality?: string;
};

const ContactInfoForm: React.FC<ContactInfoFormProps> = ({
  cvId,
  profilePicture,
  firstName,
  email,
  linkedinUrl,
  address,
  phoneNumber,
  lastName,
  nationality,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.contactInfoSection' });
  const { handleSubmit, control } = useForm({
    defaultValues: {
      phoneNumber,
      location: address,
      linkedinUrl,
      email,
      firstName,
      nationality,
      profilePicture,
      lastName,
    },
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => patchResume({ id: cvId, ...values }));

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title={t('header')}
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.FIRST_NAME}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('name')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('name')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.LAST_NAME}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('lastName')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('lastName')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.NATIONALITY}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('nationality')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('nationality')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.EMAIL}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('email')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('email')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.LINKEDIN_URL}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('linkedin')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('linkedin')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.LOCATION}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                label={t('address')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('address')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.PHONE_NUMBER}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('phoneNumber')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('phoneNumber')}
              />
            )}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default ContactInfoForm;
