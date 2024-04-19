import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import customTechnicalSkills from '../../../../assets/jsons/technical-skills.json';
import { FormField } from './enums';

interface TechnicalSkillsProps {
  cvId: string;
  technicalSkills?: string[];
}

const TechnicalSkillsForm: React.FC<TechnicalSkillsProps> = ({ cvId, technicalSkills }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.technicalSkillsSection' });
  const { handleSubmit, control } = useForm({
    defaultValues: {
      technicalSkills: technicalSkills,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => {
    patchResume({ id: cvId, technicalSkills: values.technicalSkills });
  });

  const options = customTechnicalSkills.map((skill) => {
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
            name={FormField.TECHNICAL_SKILLS}
            render={({ field: { onChange, value, ref, name }, fieldState: { error } }) => (
              <InputSelect
                label={t('headerPlural')}
                placeholder={t('headerPlural')}
                inputRef={ref}
                name={name}
                error={error?.message}
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

export default TechnicalSkillsForm;
