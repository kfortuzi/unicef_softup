interface Props {
  className?: string;
}

const TypingIndicator: React.FC<Props> = ({ className = '' }) => {
  return <span className={`typing-indicator ${className}`}></span>;
};

export default TypingIndicator;
