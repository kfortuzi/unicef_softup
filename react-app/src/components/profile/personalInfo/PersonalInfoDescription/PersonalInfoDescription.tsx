import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import { User } from 'src/api/users/types';
import Button from 'src/components/common/Button/Button';
import dateTimeFormats from 'src/constants/dateTimeFormats';
import i18n from 'src/locales';
import { formatDate } from 'src/utils/dateUtils';

interface Props {
  toggleEditMode: VoidFunction;
}

const PersonalInfoDescription: React.FC<Props> = ({ toggleEditMode }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });
  const { data: user } = useGetProfile();
  const { firstName, lastName, phoneNumber, profession, birthdayDate } = user as User;

  return (
    <div className="profile-form-view profile-form-container">
      <div className="info-group">
        <span>{t('firstName')}: </span>
        <span>{firstName}</span>
      </div>
      <div className="info-group">
        <span>{t('lastName')}: </span>
        <span>{lastName}</span>
      </div>
      <div className="info-group">
        <span>{t('phoneNumber')}: </span>
        <span>{phoneNumber}</span>
      </div>
      <div className="info-group">
        <span>{t('profession')}: </span>
        <span>{profession}</span>
      </div>
      <div className="info-group">
        <span>{t('birthdayDate')}: </span>
        <span>{formatDate(birthdayDate, '', dateTimeFormats.albanianDate)}</span>
      </div>
      <div className="info-group">
        <Button
          type="primary"
          text={i18n.t('globalStrings.edit')}
          onClick={toggleEditMode}
          style={{ marginTop: '20px' }}
        />
      </div>
    </div>
  );
};

export default PersonalInfoDescription;
