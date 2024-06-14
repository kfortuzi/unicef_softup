import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import usePostResumesWizard from 'src/api/resumes/hooks/usePostResumesWizard';
import Button from 'src/components/common/Button/Button';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import languageOptions from 'src/constants/languageOptions';
import i18n from 'src/locales';
import { Route } from 'src/router/enums';

import OtherLanguageInput from '../OtherLanguageInput/OtherLanguageInput';
import { defaultValues, digitalSkillsOptions, softSkillsOptions, technicalSkillsOptions } from './constants';
import { FormField } from './enums';
import { prepareRequestBody } from './helpers/prepareRequestBody';
import validationSchema from './validations';

const ResumeQuestionnaireForm: React.FC = () => {
  const { mutateAsync: postResumesWizardAsync, isPending } = usePostResumesWizard();
  const { data: resumes } = useGetResumes();
  const navigate = useNavigate();
  useEffect(() => {
    if (resumes) {
      navigate(Route.MY_RESUME);
    }
  }, [navigate, resumes]);

  const formContext = useForm({
    defaultValues: defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const [loading, setLoading] = useState(false);

  const { t } = useTranslation('translation', { keyPrefix: 'resumeQuestionnaire' });

  const { handleSubmit, control } = formContext;

  const submitForm = handleSubmit(async (data) => {
    setLoading(true);

    const requestBody = prepareRequestBody(data);

    postResumesWizardAsync(requestBody)
      .then(() => {
        navigate(Route.MY_RESUME);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (loading) {
    return <LoadingFullPage />;
  } else {
    return (
      <div className="resume-questionnaire-form-container">
        <FormProvider {...formContext}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitForm(e);
            }}
          >
            <Controller
              control={control}
              name={FormField.EXPERIENCES}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputTextArea
                  inputRef={ref}
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  placeholder={t('experiencesPlaceholder')}
                  className="input-textarea"
                  label={t('experiences')}
                />
              )}
            />
            <Controller
              control={control}
              name={FormField.EDUCATIONS}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputTextArea
                  inputRef={ref}
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  placeholder={t('educationsPlaceholder')}
                  label={t('educations')}
                  className="input-textarea"
                />
              )}
            />
            <Controller
              control={control}
              name={FormField.NATIVE_LANGUAGE}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputSelect
                  label={t('nativeLanguage')}
                  placeholder={t('nativeLanguagePlaceholder')}
                  className="input-textarea"
                  allowClear={false}
                  inputRef={ref}
                  error={error?.message}
                  name={name}
                  mode='tags'
                  maxCount={1}
                  value={value}
                  onChange={onChange}
                  options={languageOptions}
                />
              )}
            />
            <OtherLanguageInput />
            <Controller
              control={control}
              name={FormField.DIGITAL_SKILLS}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputSelect
                  label={t('digitalSkills')}
                  className="input-textarea"
                  placeholder={t('digitalSkillsPlaceholder')}
                  inputRef={ref}
                  name={name}
                  error={error?.message}
                  value={value}
                  onChange={onChange}
                  tokenSeparators={[',']}
                  mode="tags"
                  options={digitalSkillsOptions}
                />
              )}
            />
            <Controller
              control={control}
              name={FormField.TECHNICAL_SKILLS}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputSelect
                  label={t('technicalSkills')}
                  placeholder={t('technicalSkillsPlaceholder')}
                  className="input-textarea"
                  inputRef={ref}
                  name={name}
                  error={error?.message}
                  value={value}
                  onChange={onChange}
                  tokenSeparators={[',']}
                  mode="tags"
                  options={technicalSkillsOptions}
                />
              )}
            />
            <Controller
              control={control}
              name={FormField.SOFT_SKILLS}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputSelect
                  placeholder={t('softSkillsPlaceholder')}
                  label={t('softSkills')}
                  className="input-textarea"
                  inputRef={ref}
                  name={name}
                  value={value}
                  error={error?.message}
                  onChange={onChange}
                  tokenSeparators={[',']}
                  mode="tags"
                  options={softSkillsOptions}
                />
              )}
            />
            <Controller
              control={control}
              name={FormField.HOBBIES}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputTextArea
                  inputRef={ref}
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  placeholder={t('hobbiesPlaceholder')}
                  className="input-textarea"
                  label={t('hobbies')}
                />
              )}
            />
            <Controller
              control={control}
              name={FormField.SUMMARY}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputTextArea
                  inputRef={ref}
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error?.message}
                  placeholder={t('summaryPlaceholder')}
                  className="input-textarea"
                  label={t('summary')}
                />
              )}
            />
            <div className="button-group-container">
              <Button
                type="primary"
                text={i18n.t('globalStrings.submit')}
                htmlType="submit"
                style={{ marginTop: '20px' }}
                loading={isPending}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    );
  }
};

export default ResumeQuestionnaireForm;
