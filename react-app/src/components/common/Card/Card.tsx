import { Card as AntCard, CardProps } from 'antd';

interface Props extends CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<Props> = ({ title, children, className = '', ...rest }) => (
  <div className={`common-card ${className}`}>
    <AntCard
      title={title}
      {...rest}
    >
      {children}
    </AntCard>
  </div>
);

export default Card;
