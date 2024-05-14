import { RobotOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dropdown, MenuProps } from 'antd';
import React, { useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import usePatchResume from 'src/api/resumes/hooks/usePatchResume';
import postResumeSummary from 'src/api/resumes/requests/postResumeSummary';
import postSummaryWizard from 'src/api/resumes/requests/postSummaryWizard';
import { WorkExperience } from 'src/api/resumes/types';
import AskWizardModal from 'src/components/common/AskWizardModal/AskWizardModal';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import i18n from 'src/locales';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

type AboutMeProps = {
  cvId: string;
  aboutMe?: string;
  workExperiences?: WorkExperience[];
};

const AboutMeForm: React.FC<AboutMeProps> = ({ aboutMe, cvId }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const [contentLoading, setContentLoading] = useState(false);
  const [content, setContent] = useState(aboutMe);

  const [autogenerateContent, setAutogenerateContent] = useState(aboutMe);
  const { handleSubmit, control, setValue, reset } = useForm({
    defaultValues: {
      [FormField.ABOUT_ME]: aboutMe || defaultValues.aboutMe,
    },
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });
  const aboutMeValue = useWatch({ control, name: FormField.ABOUT_ME });
  const { mutate: patchResume, isPending } = usePatchResume();
  const submitForm = handleSubmit((values) =>
    patchResume({
      id: cvId,
      summary: values.aboutMe,
    }),
  );

  const [isOpen, setOpen] = useState(false);

  const wizardModalItems: MenuProps['items'] = [
    {
      key: 'dropdown-auto-generate-button',
      label: (
        <a onClick={async () => await autoGenerateFromAiAndSetContent()}>
          {i18n.t('askWizardModal.autoGenerateButtonText')}
        </a>
      ),
    },
    {
      key: 'dropdown-ask-wizard-button',
      label: <a onClick={() => setOpen(true)}>{i18n.t('askWizardModal.askWizardButtonText')}</a>,
    },
  ];

  const autoGenerateFromAiAndSetContent = async () => {
    setContentLoading(true);
    const data = await postResumeSummary({ content: autogenerateContent || '' });

    if (data) {
      setValue(FormField.ABOUT_ME, data, { shouldDirty: true });
      setAutogenerateContent(data);
    }
    setContentLoading(false);
  };

  const updateMessageText = async (text: string) => {
    setValue(FormField.ABOUT_ME, text, { shouldDirty: true });
  };

  const sendMessageAndGetAiPrompt = async (text: string): Promise<string | undefined> => {
    const data = await postSummaryWizard({
      message: text,
      content: content || '',
    });

    if (data) {
      setContent(data);

      return data;
    }
  };

  return (
    <Drawer
      resetForm={reset}
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
                rows={15}
              />
            )}
          />
          <Dropdown
            key={'ask-wizard-dropdown'}
            menu={{ items: wizardModalItems }}
            placement="bottomLeft"
            trigger={['click']}
            overlayStyle={{ width: 300 }}
            disabled={!aboutMeValue}
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
