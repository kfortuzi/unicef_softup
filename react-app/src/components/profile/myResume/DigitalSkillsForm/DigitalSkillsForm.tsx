import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import customDigitalSkills from '../../../../assets/jsons/digital-skills.json';
import { FormField } from './enums';

interface DigitalSkillsProps {
  cvId: string;
  digitalSkills?: string[];
}

const DigitalSkillsForm: React.FC<DigitalSkillsProps> = ({ cvId, digitalSkills }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.digitalSkillsSection' });
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      digitalSkills: digitalSkills,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => {
    patchResume({ id: cvId, digitalSkills: values.digitalSkills });
  });

  const options = customDigitalSkills.map((skill) => {
    return { value: skill, label: skill };
  });

  return (
    <Drawer
      resetForm={reset}
      submitForm={submitForm}
      isPending={isPending}
      title={t('headerPlural')}
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.DIGITAL_SKILLS}
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

export default DigitalSkillsForm;
