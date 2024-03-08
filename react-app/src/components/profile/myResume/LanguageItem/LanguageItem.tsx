import React from 'react';

import { Language } from 'src/api/resumes/types';

type LanguageItemProps = Language;

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
  const { name, reading, writing, speaking } = props;

  return (
    <div>
      <p className="language-title">{name}</p>
      <div className="language-level-container">
        <p className="language-level-text">Reading:</p>
        <p>{reading}</p>
      </div>
      <div className="language-level-container">
        <p className="language-level-text">Writing:</p>
        <p>{writing}</p>
      </div>
      <div className="language-level-container">
        <p className="language-level-text">Speaking:</p>
        <p>{speaking}</p>
      </div>
    </div>
  );
};

export default LanguageItem;
