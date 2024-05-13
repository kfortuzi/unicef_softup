import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputSelect from 'src/components/common/InputSelect/InputSelect';

import { drivingLicenseOptions } from './constants';
import { FormField } from './enums';

interface DrivingLicenseProps {
  cvId: string;
  drivingLicense?: string;
}

const DrivingLicenseForm: React.FC<DrivingLicenseProps> = ({ cvId, drivingLicense }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.drivingLicensesSection' });
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      drivingLicense: drivingLicense,
    },
    shouldFocusError: true,
  });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({ id: cvId, drivingLicense: values.drivingLicense }),
  );

  return (
    <Drawer
      resetForm={reset}
      submitForm={submitForm}
      isPending={isPending}
      title="Driving License"
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.DRIVING_LICENSE}
            render={({ field: { onChange, value, ref, name } }) => (
              <InputSelect
                placeholder={t('headerPlural')}
                label={t('headerPlural')}
                inputRef={ref}
                allowClear
                name={name}
                value={value}
                onChange={onChange}
                options={drivingLicenseOptions.map((item) => ({ value: item, label: item }))}
              />
            )}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default DrivingLicenseForm;
