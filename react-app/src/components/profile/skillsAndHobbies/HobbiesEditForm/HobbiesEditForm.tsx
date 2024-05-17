import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import usePatchUser from 'src/api/users/hooks/usePatchUser';
import Button from 'src/components/common/Button/Button';
import i18n from 'src/locales';

interface Props {
  toggleEditMode: VoidFunction;
}

const HobbiesEditForm: React.FC<Props> = ({ toggleEditMode }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.skillsAndHobbies' });
  const { data: user } = useGetProfile();
  const { mutate: patchUser, isPending } = usePatchUser();
  const { handleSubmit, control } = useForm({
    defaultValues: { hobbies: user?.hobbies || '' },
    shouldFocusError: true,
  });
  const submitForm = handleSubmit((values) => patchUser({ hobbies: values.hobbies }));

  return (
    <form
      className="hobbies-form-edit"
      onSubmit={submitForm}
    >
      <div className="input-element-container">
        <Controller
          control={control}
          name="hobbies"
          render={({ field: { name, value, onChange, ref } }) => (
            <TextArea
              ref={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={t('hobbies')}
              className="input-textarea"
            />
          )}
        />
      </div>
      <div className="button-group-container">
        <Button
          type="primary"
          text={i18n.t('globalStrings.submit')}
          htmlType="submit"
          loading={isPending}
        />
        <Button
          type="default"
          text={i18n.t('globalStrings.cancel')}
          onClick={toggleEditMode}
        />
      </div>
    </form>
  );
};

export default HobbiesEditForm;
