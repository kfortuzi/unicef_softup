import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Button from 'src/components/common/Button/Button';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import i18n from 'src/locales';

import { defaultValues } from './constants';
import { FormField } from './enums';

const ResumeQuestionnaireForm: React.FC = () => {
  const { id } = useParams();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: defaultValues,
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((data) => {
    //sumbit form logic
  });

  return (
    <div className="resume-questionnaire-form-container">
      <form onSubmit={submitForm}>
        <Controller
          control={control}
          name={FormField.EXPERIENCE}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Experience'}
              className="input-textarea"
              label="Experience"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.EDUCATION}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Education'}
              className="input-textarea"
              label="Education"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.MOTHER_LANGUAGE}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Mother Language'}
              className="input-textarea"
              label="Mother Language"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.LANGUAGES}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Languages'}
              className="input-textarea"
              label="Languages"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.TECHNICAL_SKILLS}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Technical Skills'}
              className="input-textarea"
              label="Technical Skills"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.SOFT_SKILLS}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Soft Skills'}
              className="input-textarea"
              label="Soft Skills"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.HOBBIES}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Hobbies'}
              className="input-textarea"
              label="Hobbies"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.SOMETHING_ELSE}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Something Else'}
              className="input-textarea"
              label="Something Else"
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
};

export default ResumeQuestionnaireForm;
