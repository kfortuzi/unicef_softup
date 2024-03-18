import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import Button from 'src/components/common/Button/Button';
import InputTextArea from 'src/components/common/InputTextArea/InputTextArea';
import i18n from 'src/locales';

import { defaultValues } from './constants';
import { FormField } from './enums';

const CoverLetterQuestionnaireForm: React.FC = () => {
  const { id } = useParams();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: defaultValues,
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((data) => {
    //sumbit form logic
  });

  return (
    <div className="cover-letter-questionnaire-form-container">
      <form onSubmit={submitForm}>
        <Controller
          control={control}
          name={FormField.POSITION}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Experience'}
              className="input-textarea"
              label="Position"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.COMPANY}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Company'}
              className="input-textarea"
              label="Company"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.PERSON_NAME}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Person Name'}
              className="input-textarea"
              label="Person Name"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.COMPANY_ADDRESS}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Company Address'}
              className="input-textarea"
              label="Company Address"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.MOTIVE}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Motive'}
              className="input-textarea"
              label="Motive"
            />
          )}
        />
        <Controller
          control={control}
          name={FormField.TOPICS}
          render={({ field: { name, value, onChange, ref } }) => (
            <InputTextArea
              inputRef={ref}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={'Topics'}
              className="input-textarea"
              label="Topics"
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

export default CoverLetterQuestionnaireForm;
