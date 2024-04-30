import { HomeOutlined } from "@ant-design/icons";
import React from "react";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

interface Crumb {
  to: string;
  children: React.ReactNode;
}

interface Props {
  crumbs?: Crumb[];
  isHome?: boolean;
}

const Breadcrumb: React.FC<Props> = ({ crumbs, isHome = true }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'breadcrumb' });

  return (
    <div className="crumb-container">
      {isHome && (
        <>
          <Link to="/" className="crumb-item">
            <HomeOutlined />
            {` ${t('home')}`}
          </Link>
          <span className="crumb-separator">{' / '}</span>
        </>
      )}
      {crumbs?.map(({ to, children }, index) => (
        <React.Fragment key={index}>
          {to === "#" ? (
            <div className="crumb-item">{children}</div>
          ) : (
            <Link to={to} className="crumb-item">{children}</Link>
          )}
          {index < crumbs.length - 1 && (
            <span className="crumb-separator">{' / '}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
