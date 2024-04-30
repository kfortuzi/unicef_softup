import { RobotOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import type { CollapseProps, MenuProps } from 'antd';
import { Collapse, Dropdown } from 'antd';
import { useEffect, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import usePostResumeAskWizard from 'src/api/resumes/hooks/usePostResumeAskWizard';
import usePostResumeResponsibility from 'src/api/resumes/hooks/usePostResumeResponsibility';
import { WorkExperience } from 'src/api/resumes/types';
import AskWizardModal from 'src/components/common/AskWizardModal/AskWizardModal';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputDatePicker from 'src/components/common/InputDatePicker/InputDatePicker';
import InputText from 'src/components/common/InputText/InputText';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import dateTimeFormats from 'src/constants/dateTimeFormats';
import i18n from 'src/locales';
import { isValidDate } from 'src/utils/dateUtils';

import { defaultValues } from './constants';
import { FormField } from './enums';
import fieldsValidationSchema from './validation';

interface WorkExperiencesProps {
  cvId: string;
  workExperiences: WorkExperience[];
}

const WorkExperiencesForm: React.FC<WorkExperiencesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.workExperiencesSection' });
  const [contentLoading, setContentLoading] = useState(false);
  const { mutateAsync: postResumeResponsibilityAsync } = usePostResumeResponsibility();
  const { mutateAsync: postResumeAskWizardAsync } = usePostResumeAskWizard();

  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: { experiences: props.workExperiences || [defaultValues] },
    resolver: yupResolver(fieldsValidationSchema),
    shouldFocusError: true,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'experiences',
    control,
  });

  const addExperience = () => {
    append(defaultValues);
  };

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => {
    patchResume({ id: props.cvId, experiences: values.experiences as WorkExperience[] });
  });
  const [activeKeys, setActiveKeys] = useState<string[]>();

  useEffect(() => {
    if (errors?.experiences?.length && errors.experiences.length > 0) {
      const errorItems = (errors.experiences as unknown as WorkExperience[])
        .map((_, index) => fields?.[index]?.id ?? '') ?? [];
      setActiveKeys(errorItems);
    }
  }, [errors?.experiences, fields]);

  const [isOpen, setOpen] = useState(false);

  const handleAutoGenerate = async (field: WorkExperience, index: number) => {
    setContentLoading(true);
    const responsibilitiesValue = getValues(`experiences.${index}.${FormField.RESPONSIBILITIES}`);
    const data = await postResumeResponsibilityAsync({ ...field, responsibilities: responsibilitiesValue });

    if (data) {
      setValue(`experiences.${index}.${FormField.RESPONSIBILITIES}`, data, { shouldDirty: true });
    }
    setContentLoading(false);
  };

  const updateMessageText = async (text: string, index: number) => {
    setValue(`experiences.${index}.${FormField.RESPONSIBILITIES}`, text, { shouldDirty: true });
  };

  const sendMessageAndGetAiPrompt = async (text: string, index: number): Promise<string | undefined> => {
    const data = await postResumeAskWizardAsync({
      message: getValues(`experiences.${index}.${FormField.RESPONSIBILITIES}`) || '',
      content: text,
    });

    if (data) {
      return data;
    }
  };

  const wizardModalItems = (field: WorkExperience, index: number): MenuProps['items'] => [
    {
      key: 'dropdown-auto-generate-button',
      label: <a onClick={() => handleAutoGenerate(field, index)}>
        {i18n.t('askWizardModal.autoGenerateButtonText')}
      </a>,
    },
    {
      key: 'dropdown-ask-wizard-button',
      label: <a onClick={() => setOpen(true)}>{i18n.t('askWizardModal.askWizardButtonText')}</a>,
    },
  ];

  const items: CollapseProps['items'] = fields.map((field, index) => {
    return {
      key: field.id,
      label: `${t('headerSingular')} ${index + 1}`,
      headerClass: `${(errors.experiences as unknown as WorkExperience[])
        ?.find((_, errorIndex) => errorIndex === index)
        ? 'is-invalid'
        : 'is-valid'}`,
      children: (
        <div className='input-element-container'>
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.POSITION}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('position')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={value}
                onChange={onChange}
                placeholder={t('position')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.COMPANY}`}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('company')}
                inputRef={ref}
                key={`company-${index}`}
                name={name}
                error={error?.message}
                value={value}
                onChange={onChange}
                placeholder={t('company')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.START_DATE}`}
            render={({ field: { name, value, ref }, fieldState: { error } }) => (
              <InputDatePicker
                label={t('startDate')}
                placeholder={t('startDate')}
                inputRef={ref}
                name={name}
                error={error?.message}
                value={isValidDate(value)}
                onChange={(dateObject) => {
                  setValue(name, dateObject?.format(dateTimeFormats.backendDate));
                }}
                format={dateTimeFormats.albanianDate}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.END_DATE}`}
            render={({ field: { name, value, ref } }) => (
              <InputDatePicker
                label={t('endDate')}
                placeholder={t('endDate')}
                inputRef={ref}
                name={name}
                value={isValidDate(value)}
                onChange={(dateObject) => {
                  setValue(name, dateObject?.format(dateTimeFormats.backendDate));
                }}
                format={dateTimeFormats.albanianDate}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={`experiences.${index}.${FormField.RESPONSIBILITIES}`}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputTextArea
                label={t('responsibilities')}
                inputRef={ref}
                name={name}
                value={contentLoading ? i18n.t('globalStrings.loading') : value || ''}
                disabled={contentLoading}
                onChange={onChange}
                placeholder={t('responsibilities')}
                className="input-element"
              />
            )}
          />

          <Dropdown
            key={'ask-wizard-dropdown'}
            menu={{ items: wizardModalItems(field, index) }}
            placement="bottomLeft"
            trigger={['click']}
            overlayStyle={{ width: 300 }}
          >
            <Button
              icon={<RobotOutlined />}
              type="primary"
              text={i18n.t('askWizardModal.enhanceWithAiButtonText')}
            />

          </Dropdown>

          <AskWizardModal
            setOpen={setOpen}
            open={isOpen}
            updateMessageText={(text: string) => updateMessageText(text || '', index)}
            sendMessageAndGetAiPrompt={(text: string) => sendMessageAndGetAiPrompt(text || '', index)}
          />
          <Button
            type="default"
            text={t('removeButtonTitle')}
            onClick={() => remove(index)}
            className="add-remove-experience-button"
          />
        </div>
      ),
    };
  });

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title={t('headerPlural')}
    >
      <form onSubmit={submitForm}>
        <Collapse
          items={items}
          defaultActiveKey={fields[0]?.id}
          onChange={(keys) => setActiveKeys(keys as string[])}
          activeKey={activeKeys}
        />
      </form>
      <Button
        type="default"
        text={t('addButtonTitle')}
        onClick={addExperience}
        className="add-remove-experience-button"
      />
    </Drawer>
  );
};

export default WorkExperiencesForm;
