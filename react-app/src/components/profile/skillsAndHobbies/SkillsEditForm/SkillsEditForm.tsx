import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import useDeleteSkill from 'src/api/users/hooks/useDeleteSkill';
import useGetSkills from 'src/api/users/hooks/useGetSkills';
import usePostSkill from 'src/api/users/hooks/usePostSkill';
import { GetSkillsResponse } from 'src/api/users/types';
import Button from 'src/components/common/Button/Button';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import i18n from 'src/locales';

import customDigitalSkills from '../../../../assets/jsons/digital-skills.json';
import customSoftSkills from '../../../../assets/jsons/soft-skills.json';
import customTechnicalSkills from '../../../../assets/jsons/technical-skills.json';
import { FormField } from './enums';
import { generateDefaultValues } from './helpers/generateDefaultValues';

interface Props {
  toggleEditMode: VoidFunction;
}

const SkillsEditForm: React.FC<Props> = ({ toggleEditMode }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.skillsAndHobbies' });
  const { data: skills, isFetching, isFetched } = useGetSkills();
  const [changeLog, setChangeLog] = useState<Record<string, string | undefined>>({});
  const { control } = useForm({
    shouldFocusError: true,
    defaultValues: {
      [FormField.TAGS]: generateDefaultValues(skills),
    },
  });

  useEffect(() => {
    if (isFetched) {
      skills?.map((skill) => {
        setChangeLog({ ...changeLog, [skill.name]: 'unchanged' });
      });
    }
  }, [isFetched, skills]);

  const { mutate: postSkill, isPending } = usePostSkill();
  const { mutate: deleteSkill } = useDeleteSkill();

  const options = [...customDigitalSkills, ...customSoftSkills, ...customTechnicalSkills].map((skill) => {
    return { value: skill, label: skill };
  });

  const handleSubmit = async () => {
    await Promise.all(Object.entries(changeLog)).then((entries) => {
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

  const handleSelect = (value: string, skills: GetSkillsResponse | undefined): void => {
    if (skills?.some((skill: { name: string }) => skill.name === value)) {
      setChangeLog({ ...changeLog, [value]: 'unchanged' });
    } else {
      setChangeLog({ ...changeLog, [value]: 'added' });
    }
  };

  const handleDeselect = (value: string, skills: GetSkillsResponse | undefined): void => {
    if (!skills?.some((skill: { name: string }) => skill.name === value)) {
      setChangeLog({ ...changeLog, [value]: undefined });
    } else {
      setChangeLog({ ...changeLog, [value]: 'removed' });
    }
  };

  if (isFetching) {
    return <LoadingFullPage />;
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
              onSelect={(value) => handleSelect(value, skills)}
              onDeselect={(value) => handleDeselect(value, skills)}
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
