import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

const AboutMeForm: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => patchResume({ id: '', summary: values.aboutMe }));

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title={t('aboutMeSection.header')}
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.ABOUT_ME}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                label={t('aboutMeSection.aboutMe')}
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('aboutMeSection.placeholder')}
                className="input-textarea"
              />
            )}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default AboutMeForm;
