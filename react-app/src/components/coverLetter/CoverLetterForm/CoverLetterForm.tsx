import TextArea from 'antd/es/input/TextArea';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import useGetCoverLetter from 'src/api/coverLetters/hooks/useGetCoverLetter';
import usePatchCoverLetter from 'src/api/coverLetters/hooks/usePatchCoverLetter';
import { GetCoverLetterRequest, GetCoverLetterResponse } from 'src/api/coverLetters/types';
import AskWizardModal from 'src/components/common/AskWizardModal/AskWizardModal';
import Drawer from 'src/components/common/Drawer/Drawer';
import InputText from 'src/components/common/InputText/InputText';

import { FormField } from './enums';

const CoverLetterForm: React.FC = () => {
  const { id } = useParams();
  const { data: coverLetter, isFetched } = useGetCoverLetter({ id } as GetCoverLetterRequest);
  const { mutate: patchCoverLetter, isPending } = usePatchCoverLetter();

  const { handleSubmit, control, setValue, reset } = useForm({
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

  const handleAutoGenerate = () => {
    //ask to the ai and take the response and set it to the content

    setValue(FormField.CONTENT, 'asdasd');
  };

  const handleResponseOnClick = (text: string) => {
    //ask to the ai and take the response and set it to the content

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
          <AskWizardModal
            content={coverLetter?.content || ''}
            autoGenerateOnClick={handleAutoGenerate}
            responseOnClick={handleResponseOnClick}
          />
        </div>
      </form>
    </Drawer>
  );
};

export default CoverLetterForm;
