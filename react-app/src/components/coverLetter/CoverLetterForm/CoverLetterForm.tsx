import { RobotOutlined } from '@ant-design/icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dropdown, MenuProps } from 'antd';
import React, { useEffect, useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import usePatchCoverLetter from 'src/api/coverLetters/hooks/usePatchCoverLetter';
import usePostCoverLetter from 'src/api/coverLetters/hooks/usePostCoverLetter';
import usePostCoverLetterAskWizard from 'src/api/coverLetters/hooks/usePostCoverLetterAskWizard';
import usePostCoverLetterAutogenerate from 'src/api/coverLetters/hooks/usePostCoverLetterAutogenerate';
import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import AskWizardModal from 'src/components/common/AskWizardModal/AskWizardModal';
import Button from 'src/components/common/Button/Button';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputText from 'src/components/common/InputText/InputText';
import TextArea from 'src/components/common/InputTextArea/InputTextArea';
import i18n from 'src/locales';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

interface Props {
  coverLetter?: GetCoverLetterResponse;
  isFetched?: boolean;
}

const CoverLetterForm: React.FC<Props> = ({ coverLetter, isFetched = false }) => {
  const { id } = useParams();
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });
  const { mutate: patchCoverLetter, isPending: isUpdating } = usePatchCoverLetter();
  const { mutate: postCoverLetter, isPending: isCreating } = usePostCoverLetter();
  const { mutateAsync: postCoverLetterAskWizardAsync } = usePostCoverLetterAskWizard();
  const { mutateAsync: postCoverLetterAutogenerate } = usePostCoverLetterAutogenerate();
  const [contentLoading, setContentLoading] = useState(false);
  const [aiContent, setAiContent] = useState('');
  const [autogenerateContent, setAutogenerateContent] = useState('');

  const isCreateMode = !id;

  const { handleSubmit, control, setValue, reset, getValues } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
    shouldFocusError: true,
  });

  const formContentValue = useWatch({ control, name: FormField.CONTENT });

  useEffect(() => {
    if (isFetched && coverLetter) {
      reset(coverLetter);
    }
  }, [isFetched, reset, coverLetter]);

  const submitForm = handleSubmit(({ to, company, companyAddress, content }) => {
    const data = { company, companyAddress: companyAddress || '', content, to };
    if (isCreateMode) {
      postCoverLetter(data);
    } else {
      patchCoverLetter({ id, ...data });
    }
  });

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
    const data = await postCoverLetterAutogenerate({
      content: autogenerateContent || getValues(FormField.CONTENT) || '',
      coverLetterId: id,
    });

    if (data) {
      setAutogenerateContent(data);
      setValue(FormField.CONTENT, data, { shouldDirty: true });
    }
    setContentLoading(false);
  };

  const updateMessageText = async (text: string) => {
    setValue(FormField.CONTENT, text, { shouldDirty: true });
  };

  const sendMessageAndGetAiPrompt = async (text: string): Promise<string | undefined> => {
    const data = await postCoverLetterAskWizardAsync({
      message: text,
      content: aiContent || getValues(FormField.CONTENT),
    });

    if (data) {
      setAiContent(data);

      return data;
    }
  };

  return (
    <Drawer
      resetForm={reset}
      submitForm={submitForm}
      isPending={isUpdating || isCreating}
      title={t('header')}
      width={600}
      key={`cover-letter-form-${id}`}
      isCreate={isCreateMode}
    >
      <form onSubmit={submitForm}>
        <div className="cover-letter-form">
          <Controller
            control={control}
            name={FormField.TO}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('to')}
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('toPlaceholder')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.COMPANY}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('company')}
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('companyPlaceholder')}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.COMPANY_ADDRESS}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputText
                label={t('companyAddress')}
                inputRef={ref}
                name={name}
                value={value || ''}
                error={error?.message}
                onChange={onChange}
                placeholder={t('companyAddressPlaceholder')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.CONTENT}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <TextArea
                label={t('content')}
                inputRef={ref}
                name={name}
                value={contentLoading ? t('loading') : value || ''}
                error={error?.message}
                onChange={onChange}
                disabled={contentLoading}
                placeholder={t('content')}
                rows={30}
                className="input-element"
              />
            )}
          />
          <Dropdown
            key={'ask-wizard-dropdown'}
            menu={{ items: wizardModalItems }}
            placement="bottomLeft"
            trigger={['click']}
            overlayStyle={{ width: 300 }}
            disabled={!formContentValue}
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

export default CoverLetterForm;
