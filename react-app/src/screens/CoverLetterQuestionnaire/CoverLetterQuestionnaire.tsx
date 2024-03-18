import React from 'react';

import CoverLetterQuestionnaireForm from 'src/components/coverLetter/CoverLetterQuestionnaireForm/CoverLetterQuestionnaireForm';

const CoverLetterQuestionnaire: React.FC = () => {
  return (
    <div className="cover-letter-questionnaire-container">
      <h1>Cover Letter Questionnaire</h1>
      <CoverLetterQuestionnaireForm />
    </div>
  );
};

export default CoverLetterQuestionnaire;
