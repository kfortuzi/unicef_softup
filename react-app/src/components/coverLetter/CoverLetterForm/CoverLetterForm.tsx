import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetCoverLetter from 'src/api/coverLetters/hooks/useGetCoverLetter';
import usePatchCoverLetter from 'src/api/coverLetters/hooks/usePatchCoverLetter';
import usePostCoverLetterAskWizard from 'src/api/coverLetters/hooks/usePostCoverLetterAskWizard';
import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import AskWizardModal from 'src/components/common/AskWizardModal/AskWizardModal';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputText from 'src/components/common/InputText/InputText';
import TextArea from 'src/components/common/InputTextArea/InputTextArea';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

const CoverLetterForm: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });
  const { data: coverLetter, isFetched } = useGetCoverLetter({ id } as GetCoverLetterResponse);
  const { mutate: patchCoverLetter, isPending } = usePatchCoverLetter();
  const { mutateAsync: postCoverLetterAskWizardAsync } = usePostCoverLetterAskWizard();
  const [contentLoading, setContentLoading] = React.useState(false);

  const { handleSubmit, control, setValue, reset, getValues } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
    shouldFocusError: true,
  });

  useEffect(() => {
    if (isFetched) {
      reset(coverLetter as GetCoverLetterResponse);
    }
  }, [isFetched, reset, coverLetter]);

  const submitForm = handleSubmit((data) => {
    patchCoverLetter({ id, ...data } as GetCoverLetterResponse);
  });

  const handleAutoGenerate = async () => {
    setContentLoading(true);
    const data = await postCoverLetterAskWizardAsync({ message: getValues(FormField.CONTENT) || '' });

    if (data) {
      setValue(FormField.CONTENT, data, { shouldDirty: true });
    }
    setContentLoading(false);
  };

  const handleUseResponseOnClick = async (text: string) => {
    setValue(FormField.CONTENT, text, { shouldDirty: true });
  };

  const handleSendMessageOnClick = async (text: string): Promise<string | undefined> => {
    const data = await postCoverLetterAskWizardAsync({
      message: getValues(FormField.CONTENT) || '',
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
      title={t('header')}
      width={600}
      key={`cover-letter-form-${id}`}
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
                placeholder={t('to')}
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
                placeholder={t('company')}
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
                placeholder={t('companyAddress')}
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
          <AskWizardModal
            autoGenerateOnClick={handleAutoGenerate}
            useOnClick={handleUseResponseOnClick}
            sendMessageOnclick={handleSendMessageOnClick}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default CoverLetterForm;
