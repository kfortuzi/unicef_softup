import { CloseOutlined } from '@ant-design/icons';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';
import InputSelect from 'src/components/common/InputSelect/InputSelect';
import languageLevels from 'src/constants/languageLevels';
import languageOptions from 'src/constants/languageOptions';

import { FormField } from '../ResumeQuestionnaireForm/enums';

const OtherLanguageInput = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'resumeQuestionnaire' });
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: FormField.OTHER_LANGUAGES_CONTAINER,
    keyName: 'uniqueKey',
  });

  const addOtherLanguage = () => {
    append({
      [FormField.OTHER_LANGUAGE]: [],
      [FormField.OTHER_LANGUAGE_LEVEL]: '',
    })
  }

  return (
    <div className='other-languages-container'>
      <div className='container-header'>
        <h4 className='container-title'>{t('otherLanguage')}</h4>
        <Button
          type="default"
          text={t('addOtherLanguages')}
          className="add-language-button"
          onClick={addOtherLanguage}
        />
      </div>
      {
        fields.map((field, index) => (
          <div key={field.uniqueKey} className='other-languages-container-inputs'>
            <Controller
              control={control}
              name={`${FormField.OTHER_LANGUAGES_CONTAINER}.${index}.${FormField.OTHER_LANGUAGE}`}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputSelect
                  placeholder={t('otherLanguagePlaceholder')}
                  className="input-select"
                  allowClear={false}
                  inputRef={ref}
                  error={error?.message}
                  name={name}
                  value={value}
                  onChange={onChange}
                  mode='tags'
                  maxCount={1}
                  options={languageOptions}
                />
              )}
            />
            <Controller
              control={control}
              name={`${FormField.OTHER_LANGUAGES_CONTAINER}.${index}.${FormField.OTHER_LANGUAGE_LEVEL}`}
              render={({ field: { name, value, onChange, ref }, fieldState: { error } }) => (
                <InputSelect
                  placeholder={t('otherLanguageLevelPlaceholder')}
                  className="input-select"
                  allowClear={false}
                  inputRef={ref}
                  error={error?.message}
                  name={name}
                  value={value}
                  onChange={onChange}
                  options={languageLevels}
                />
              )}
            />
            <CloseOutlined className='remove-language-icon' onClick={() => remove(index)} />
          </div>
        ))
      }
    </div>
  )
}

export default OtherLanguageInput;
