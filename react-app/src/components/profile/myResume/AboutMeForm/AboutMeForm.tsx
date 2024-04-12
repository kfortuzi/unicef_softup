import { RobotOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dropdown, MenuProps } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import postResumeAskWizard from 'src/api/resumes/requests/postResumeAskWizard';
import postResumeSummary from 'src/api/resumes/requests/postResumeSummary';
import { WorkExperience } from 'src/api/resumes/types';
import AskWizardModal from 'src/components/common/AskWizardModal/AskWizardModal';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import { getBaseCvId } from 'src/helpers/baseCvStorage';
import i18n from 'src/locales';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

type AboutMeProps = {
  aboutMe?: string;
  workExperiences?: WorkExperience[];
};

const AboutMeForm: React.FC<AboutMeProps> = ({ aboutMe, workExperiences }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const [contentLoading, setContentLoading] = useState(false);
  const { handleSubmit, control, setValue, getValues } = useForm({
    defaultValues: {
      [FormField.ABOUT_ME]: aboutMe || defaultValues.aboutMe,
    },
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const cvId = getBaseCvId();

  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) => patchResume({ id: cvId, summary: values.aboutMe }));

  const [isOpen, setOpen] = useState(false);

  const wizardModalItems: MenuProps['items'] = [
    {
      key: 'dropdown-auto-generate-button',
      label: <a onClick={async () => await autoGenerateFromAiAndSetContent()}>
        {i18n.t('askWizardModal.autoGenerateButtonText')}
      </a>,
    },
    {
      key: 'dropdown-ask-wizard-button',
      label: <a onClick={() => setOpen(true)}>{i18n.t('askWizardModal.askWizardButtonText')}</a>,
    },
  ];

  const autoGenerateFromAiAndSetContent = async () => {
    setContentLoading(true);
    const data = await postResumeSummary(workExperiences || []);

    if (data) {
      setValue(FormField.ABOUT_ME, data, { shouldDirty: true });
    }
    setContentLoading(false);
  };

  const updateMessageText = async (text: string) => {
    setValue(FormField.ABOUT_ME, text, { shouldDirty: true });
  };

  const sendMessageAndGetAiPrompt = async (text: string): Promise<string | undefined> => {
    const data = await postResumeAskWizard({
      message: getValues(FormField.ABOUT_ME) || '',
      content: text,
    });

    if (data) {
      return data;
    }
  };

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title={t('aboutMeSection.header')}
    >
      <form onSubmit={submitForm}>
        <div className="input-element-container">
          <Controller
            control={control}
            name={FormField.ABOUT_ME}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                label={t('aboutMeSection.aboutMe')}
                inputRef={ref}
                name={name}
                value={contentLoading ? t('loading') : value}
                error={error?.message}
                disabled={contentLoading}
                onChange={onChange}
                placeholder={t('aboutMeSection.placeholder')}
                className="input-textarea"
              />
            )}
          />
          <Dropdown
            key={'ask-wizard-dropdown'}
            menu={{ items: wizardModalItems }}
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
            updateMessageText={updateMessageText}
            sendMessageAndGetAiPrompt={sendMessageAndGetAiPrompt}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default AboutMeForm;
