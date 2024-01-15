import { Result, ResultProps } from 'antd';
import React, { ReactNode } from 'react';

interface Props extends ResultProps {
  status: ResultProps['status'];
  title: ReactNode;
  subTitle?: ReactNode;
  icon?: ReactNode;
  extra?: ReactNode;
  className?: string;
}

const ResultComponent: React.FC<Props> = ({
  status,
  title,
  subTitle,
  icon,
  extra,
  className = '',
  ...rest
}) => (
  <div className={`result-component ${className}`}>
    <Result
      status={status}
      title={title}
      subTitle={subTitle}
      icon={icon}
      extra={extra}
      {...rest}
    />
  </div>
);

export default ResultComponent;
