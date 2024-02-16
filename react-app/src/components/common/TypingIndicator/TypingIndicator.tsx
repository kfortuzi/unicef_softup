interface Props {
  className?: string;
}

const TypingIndicator: React.FC<Props> = ({ className = '' }) => {
  return <div className={`typing-indicator ${className}`}></div>;
};

export default TypingIndicator;
