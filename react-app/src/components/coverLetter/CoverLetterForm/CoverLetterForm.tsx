import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import useGetCoverLetter from 'src/api/coverLetters/hooks/useGetCoverLetter';
import usePatchCoverLetter from 'src/api/coverLetters/hooks/usePatchCoverLetter';
import { GetCoverLetterRequest } from 'src/api/coverLetters/types';
import AiButtonGroup from 'src/components/common/AiButtonGroup/AiButtonGroup';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputText from 'src/components/common/InputText/InputText';

import { FormField } from './enums';

const CoverLetterForm: React.FC = () => {
  const { id } = useParams();
  const { data: getCoverLetter } = useGetCoverLetter({ id } as GetCoverLetterRequest);
  const { mutate: patchCoverLetter, isPending } = usePatchCoverLetter();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: getCoverLetter,
    shouldFocusError: true,
  });

  const submitForm = handleSubmit((data) => {
    patchCoverLetter(data);
  });

  const handleAi = (text: string) => {
    setValue(FormField.CONTENT, text);
  };

  return (
    <Drawer
      submitForm={submitForm}
      isPending={isPending}
      title="Cover Letter"
    >
      <form onSubmit={submitForm}>
        <div className="cover-letter-form">
          <Controller
            control={control}
            name={FormField.TO}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="To"
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'To'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.COMPANY}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Company"
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'Company'}
                className="input-element"
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.COMPANY_ADDRESS}
            render={({ field: { name, value, onChange, ref } }) => (
              <InputText
                label="Company Address"
                inputRef={ref}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={'Company Address'}
              />
            )}
          />
          <Controller
            control={control}
            name={FormField.CONTENT}
            render={({ field: { name, value, onChange, ref } }) => (
              <div>
                <p>Content</p>
                <TextArea
                  ref={ref}
                  name={name}
                  value={value}
                  onChange={onChange}
                  placeholder={'Content'}
                  className="input-element"
                />
              </div>
            )}
          />
          <div className="ai-button">
            <AiButtonGroup
              autogenerateOnClick={handleAi}
              askWizardOnClick={handleAi}
            />
          </div>
        </div>
      </form>
    </Drawer>
  );
};

export default CoverLetterForm;
