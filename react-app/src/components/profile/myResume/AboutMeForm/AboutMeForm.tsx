import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';

const AboutMeForm: React.FC<Props> = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const { handleSubmit, control } = useForm({
    defaultValues: { aboutMe: '' },
    shouldFocusError: true,
  });

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => patchResume({ id: '', summary: values.aboutMe }));

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title="About Me"
    >
      <form
        className="profile-form-edit"
        onSubmit={submitForm}
      >
        <div className="input-element-container">
          <Controller
            control={control}
            name="aboutMe"
            render={({ field: { name, value, onChange, ref } }) => (
              <TextArea
                ref={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'About Me'}
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
