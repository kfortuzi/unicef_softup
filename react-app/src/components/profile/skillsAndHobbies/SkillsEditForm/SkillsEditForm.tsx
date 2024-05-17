import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useDeleteSkill from 'src/api/users/hooks/useDeleteSkill';
import useGetSkills from 'src/api/users/hooks/useGetSkills';
import usePostSkill from 'src/api/users/hooks/usePostSkill';
import Button from 'src/components/common/Button/Button';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import i18n from 'src/locales';

import customDigitalSkills from '../../../../assets/jsons/digital-skills.json';
import customSoftSkills from '../../../../assets/jsons/soft-skills.json';
import customTechnicalSkills from '../../../../assets/jsons/technical-skills.json';
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
  const { mutate: deleteSkill } = useDeleteSkill();
  useEffect(() => {
    reset({ [FormField.TAGS]: generateDefaultValues(skills) });
  }, [reset, skills]);

  const options = [...customDigitalSkills, ...customSoftSkills, ...customTechnicalSkills].map((skill) => {
    return { value: skill, label: skill };
  });

  const handleSubmit = async () => {
    await Promise.all(changeLog.entries()).then((entries) => {
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
  };

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
      onSubmit={handleSubmit}
    >
      <div className="input-element-container">
        <Controller
          control={control}
          name={FormField.TAGS}
          render={({ field: { onChange, value, ref } }) => (
            <InputSelect
              placeholder={t('tagsPlaceholder')}
              inputRef={ref}
              name={t('tagsLabel')}
              value={value}
              onChange={onChange}
              tokenSeparators={[',']}
              mode="tags"
              options={options}
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

export default SkillsEditForm;
