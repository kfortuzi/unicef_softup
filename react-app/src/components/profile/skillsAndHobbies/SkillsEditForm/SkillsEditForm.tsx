import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useGetSkills from 'src/api/users/hooks/useGetSkills';
import usePostSkill from 'src/api/users/hooks/usePostSkill';
import deleteSkill from 'src/api/users/requests/deleteSkill';
import Button from 'src/components/common/Button/Button';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import i18n from 'src/locales';

import { FormField } from './enums';
import { generateDefaultValues } from './helpers/generateDefaultValues';
import { handleDeselect, handleSelect } from './helpers/handleChange';

interface Props {
  toggleEditMode: VoidFunction;
}

const SkillsEditForm: React.FC<Props> = ({ toggleEditMode }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.skillsAndHobbies' });
  const { data: skills, isFetching, isFetched } = useGetSkills();
  const { control, reset } = useForm({
    shouldFocusError: true,
  });
  const changeLog: Map<string, string> = new Map();

  const { mutate: postSkill, isPending } = usePostSkill();
  useEffect(() => {
    reset({ [FormField.TAGS]: generateDefaultValues(skills) });
  }, [reset, skills]);
  if (isFetching) {
    return <LoadingFullPage />;
  }
  if (isFetched) {
    skills?.map((skill) => {
      changeLog.set(skill.name, 'unchanged');
    });
  }

  return (
    <form
      className="skills-form-edit"
      onSubmit={() => {
        Promise.all(changeLog.entries()).then((entries) => {
          entries.forEach(([skill, status]) => {
            if (status === 'added') {
              postSkill({ name: skill });
            }
            if (status === 'removed') {
              const skillToDelete = skills?.find((s) => s.name === skill);
              if (skillToDelete) {
                deleteSkill(skillToDelete.id);
              }
            }
          });
        });
        toggleEditMode();
      }}
    >
      <div className="input-element-container">
        <Controller
          control={control}
          name={FormField.TAGS}
          render={({ field: { name, onChange, value } }) => (
            <InputSelect
              label={t('tagsLabel')}
              name={name}
              onChange={onChange}
              tokenSeparators={[',']}
              mode="tags"
              value={value}
              options={generateDefaultValues(skills)}
              onSelect={(value) => handleSelect(value, skills, changeLog)}
              onDeselect={(value) => handleDeselect(value, skills, changeLog)}
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
          style={{ marginTop: '20px' }}
        />
        <Button
          type="primary"
          text={i18n.t('globalStrings.cancel')}
          onClick={toggleEditMode}
          style={{ marginTop: '20px' }}
        />
      </div>
    </form>
  );
};

export default SkillsEditForm;
