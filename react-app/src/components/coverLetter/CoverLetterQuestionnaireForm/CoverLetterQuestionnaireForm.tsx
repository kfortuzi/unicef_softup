import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import usePostCoverLetterWizard from 'src/api/coverLetters/hooks/usePostCoverLetterWizard';
import Button from 'src/components/common/Button/Button';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import i18n from 'src/locales';

import { defaultValues } from './constants';
import { FormField } from './enums';
import validationSchema from './validation';

const CoverLetterQuestionnaireForm: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'coverLetterDetails' });
  const { mutateAsync: postCoverLetterWizardAsync } = usePostCoverLetterWizard();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });

  const submitForm = handleSubmit(async (data) => {
    setLoading(true);
    postCoverLetterWizardAsync(data)
      .then((generatedCoverLetter) => {
        navigate(`/cover-letters/${generatedCoverLetter?.id}`, { replace: true });
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (loading) {
    return <LoadingFullPage />;
  } else {
    return (
      <div className="cover-letter-questionnaire-form-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitForm(e);
          }}
        >
          <Controller
            control={control}
            name={FormField.TITLE}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('titlePlaceholder')}
                className="input-textarea"
                label={t('title')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.COMPANY}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('companyPlaceholder')}
                className="input-textarea"
                label={t('company')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.TO_PERSON}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('toPlaceholder')}
                className="input-textarea"
                label={t('to')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.COMPANY_ADDRESS}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('companyAddressPlaceholder')}
                className="input-textarea"
                label={t('companyAddress')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.MOTIVE}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('motivePlaceholder')}
                className="input-textarea"
                label={t('motive')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.TOPIC}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                error={error?.message}
                onChange={onChange}
                placeholder={t('topicPlaceholder')}
                className="input-textarea"
                label={t('topic')}
              />
            )}
          />
          <div className="button-group-container">
            <Button
              type="primary"
              text={i18n.t('globalStrings.submit')}
              htmlType="submit"
              style={{ marginTop: '20px' }}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default CoverLetterQuestionnaireForm;
