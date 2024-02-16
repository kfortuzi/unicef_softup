import Button from 'src/components/common/Button/Button';

const TopicSelectionOptions: React.FC = () => {
  return (
    <div className="topic-selection-options">
      <Button
        type="default"
        text="Explore Job Opportunities"
        icon={<span className="icon">💼</span>}
        className="topic-button"
      />
      <Button
        type="default"
        text="Craft a Winning Resume"
        icon={<span className="icon">🏅</span>}
        className="topic-button"
      />
      <Button
        type="default"
        text="Receive Career Guidance"
        icon={<span className="icon">🔎</span>}
        className="topic-button"
      />
    </div>
  );
};

export default TopicSelectionOptions;
