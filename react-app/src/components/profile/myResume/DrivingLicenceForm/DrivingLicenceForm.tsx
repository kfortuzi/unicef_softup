import { Controller, useForm } from 'react-hook-form';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import { DrivingLicence } from 'src/api/resumes/types';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import { drivingLicenceOptions } from './constants';
import { FormField } from './enums';

interface DrivingLicenceProps {
  driverLicences: DrivingLicence[];
}

const DrivingLicenceForm: React.FC<DrivingLicenceProps> = ({ driverLicences }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      drivingLicences: driverLicences,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: '', drivingLicences: values.drivingLicences }),
  );

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title="Driving Licences"
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.DRIVING_LICENCES}
            render={({ field: { onChange, value, ref, name } }) => (
              <InputSelect
                placeholder={'Driving License'}
                inputRef={ref}
                name={name}
                value={value.map((item) => item.level)}
                onChange={onChange}
                tokenSeparators={[',']}
                mode="tags"
                options={drivingLicenceOptions.map((item) => ({ value: item, label: item }))}
              />
            )}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default DrivingLicenceForm;
