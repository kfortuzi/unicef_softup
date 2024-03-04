import React from 'react';

interface LanguageItemProps {
  name: string;
  readingLevel: string;
  writingLevel: string;
  speakingLevel: string;
}

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
  const { name, readingLevel, writingLevel, speakingLevel } = props;

  return (
    <div>
      <p className="language-title">{name}</p>
      <div className="language-level-container">
        <p className="language-level-text">Reading:</p>
        <p>{readingLevel}</p>
      </div>
      <div className="language-level-container">
        <p className="language-level-text">Writing:</p>
        <p>{writingLevel}</p>
      </div>
      <div className="language-level-container">
        <p className="language-level-text">Speaking:</p>
        <p>{speakingLevel}</p>
      </div>
    </div>
  );
};

export default LanguageItem;
