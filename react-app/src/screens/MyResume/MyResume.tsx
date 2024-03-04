import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';

const MyResume: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const toggleIsEditForm = () => {
    setIsEditMode((currentIsEdit) => !currentIsEdit);
  };

  return (
    <div>
      <MyResumeView toggleEditMode={toggleIsEditForm} />
    </div>
  );
};

export default MyResume;
