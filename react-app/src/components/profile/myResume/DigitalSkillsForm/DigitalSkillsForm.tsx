import { Controller, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import { FormField } from './enums';

interface DigitalSkillsProps {
  digitalSkills: string[];
}

const DigitalSkillsForm: React.FC<DigitalSkillsProps> = ({ digitalSkills }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      digitalSkills: digitalSkills,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => patchResume({ id: '', digitalSkills: values.digitalSkills }));

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title="Digital Skills"
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.DIGITAL_SKILLS}
            render={({ field: { onChange, value, ref, name } }) => (
              <InputSelect
                placeholder={'Digital Skills'}
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

export default DigitalSkillsForm;
