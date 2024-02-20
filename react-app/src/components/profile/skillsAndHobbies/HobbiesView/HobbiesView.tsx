import React from 'react';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import Button from 'src/components/common/Button/Button';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';
import i18n from 'src/locales';

interface Props {
  toggleEditMode: VoidFunction;
}

const HobbiesView: React.FC<Props> = ({ toggleEditMode }) => {
  const { data: profile, isFetching } = useGetProfile();

  if (isFetching) {
    return <LoadingFullPage />;
  }

  return (
    <div className="profile-form-view">
      <div className="info-group">
        <div>{profile?.hobbies}</div>
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

export default HobbiesView;
