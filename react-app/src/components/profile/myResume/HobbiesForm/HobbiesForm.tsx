import { Controller, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import { FormField } from './enums';

interface HobbiesProps {
  hobbies: string[];
}

const HobbiesForm: React.FC<HobbiesProps> = ({ hobbies }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      hobbies: hobbies,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => patchResume({ id: '', hobbies: values.hobbies }));

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title="Hobbies And Interests"
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.HOBBIES}
            render={({ field: { onChange, value, ref, name } }) => (
              <InputSelect
                placeholder={'Hobbies And Interests'}
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

export default HobbiesForm;
