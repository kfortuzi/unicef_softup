import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import customSoftSkills from '../../../../assets/jsons/soft-skills.json';
import { FormField } from './enums';

interface SoftSkillsProps {
  cvId: string;
  softSkills?: string[];
}

const SoftSkillsForm: React.FC<SoftSkillsProps> = ({ cvId, softSkills }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.softSkillsSection' });
  const { handleSubmit, control } = useForm({
    defaultValues: {
      softSkills: softSkills,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => patchResume({ id: cvId, softSkills: values.softSkills }));

  const options = customSoftSkills.map((skill) => {
    return { value: skill, label: skill };
  });

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title={t('headerPlural')}
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.SOFT_SKILLS}
            render={({ field: { onChange, value, ref, name } }) => (
              <InputSelect
                placeholder={t('headerPlural')}
                label={t('headerPlural')}
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                tokenSeparators={[',']}
                mode="tags"
                options={options}
              />
            )}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default SoftSkillsForm;
