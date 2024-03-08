import React from 'react';
import { useTranslation } from 'react-i18next';

import MyResumeView from 'src/components/profile/myResume/MyResumeView/MyResumeView';
import ResumePdfView from 'src/components/profile/myResume/ResumePdfView/ResumePdfView';

const MyResume: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <div>
      <MyResumeView />
      {/* <ResumePdfView /> */}
    </div>
  );
};

export default MyResume;
