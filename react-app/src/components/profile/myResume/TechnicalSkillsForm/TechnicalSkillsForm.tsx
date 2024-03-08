import { Controller, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import { FormField } from './enums';

interface TechnicalSkillsProps {
  technicalSkills: string[];
}

const TechnicalSkillsForm: React.FC<TechnicalSkillsProps> = ({ technicalSkills }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      technicalSkills: technicalSkills,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: '', technicalSkills: values.technicalSkills }),
  );

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title="Technical Skills"
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.TECHNICAL_SKILLS}
            render={({ field: { onChange, value, ref, name } }) => (
              <InputSelect
                placeholder={'Technical Skills'}
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                tokenSeparators={[',']}
                mode="tags"
              />
            )}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default TechnicalSkillsForm;
