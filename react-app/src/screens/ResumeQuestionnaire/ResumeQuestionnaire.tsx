import React from 'react';

import ResumeQuestionnaireForm from 'src/components/resume/ResumeQuestionnaireForm/ResumeQuestionnaireForm';

const ResumeQuestionnaire: React.FC = () => {
  return (
    <div className="resume-questionnaire-container">
      <h1>Resume Questionnaire</h1>
      <ResumeQuestionnaireForm />
    </div>
  );
};

export default ResumeQuestionnaire;
