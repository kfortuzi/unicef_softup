import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useGetResumes from 'src/api/resumes/hooks/useGetResumes';
import usePostResumesWizard from 'src/api/resumes/hooks/usePostResumesWizard';
import Button from 'src/components/common/Button/Button';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import i18n from 'src/locales';
import { Route } from 'src/router/enums';

import { defaultValues } from './constants';
import { FormField } from './enums';
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

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    shouldFocusError: true,
    resolver: yupResolver(validationSchema),
  });

  const [loading, setLoading] = useState(false);

  const { t } = useTranslation('translation', { keyPrefix: 'resumeQuestionnaire' });

  const submitForm = handleSubmit(async (data) => {
    setLoading(true);
    postResumesWizardAsync(data)
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
                placeholder={t('experiences')}
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
                placeholder={t('educations')}
                label={t('educations')}
                className="input-textarea"
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.NATIVE_LANGUAGE}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
                placeholder={t('nativeLanguage')}
                className="input-textarea"
                label={t('nativeLanguage')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.OTHER_LANGUAGE}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
                placeholder={t('otherLanguage')}
                className="input-textarea"
                label={t('otherLanguage')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.DIGITAL_SKILLS}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
                placeholder={t('digitalSkills')}
                className="input-textarea"
                label={t('digitalSkills')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.TECHNICAL_SKILLS}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
                placeholder={t('technicalSkills')}
                className="input-textarea"
                label={t('technicalSkills')}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.SOFT_SKILLS}
            render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
              <InputTextArea
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
                placeholder={t('softSkills')}
                className="input-textarea"
                label={t('softSkills')}
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
                placeholder={t('hobbies')}
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
                placeholder={t('summary')}
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
      </div>
    );
  }
};

export default ResumeQuestionnaireForm;
