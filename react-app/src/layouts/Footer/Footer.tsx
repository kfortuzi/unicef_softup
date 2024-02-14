import { Typography, Image } from 'antd';
import { Footer as AntFooter } from 'antd/es/layout/layout';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' });

  return (
    <AntFooter
      className="footer"
      style={{ textAlign: 'center' }}
    >
      <div className="footer-column logo">
        <Image
          width={260}
          src="src/assets/images/logo.png"
          preview={false}
        />
      </div>
      <div className="footer-column">
        <Typography.Text
          strong
          className="col-header"
        >
          {t('nationalEmploymentService')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('whatDoesTheNationalEmploymentServiceDo')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('rulesToBeAppliedDuringApplication')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('privacyPolicy')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('help')}
        </Typography.Text>
      </div>
      <div className="footer-column">
        <Typography.Text
          strong
          className="col-header"
        >
          {t('contact')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('officesInAlbania')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('tel')}: +35544528363
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('email')}: kontakt@akpa.gov.al
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('mondayToThursday')}: 08:00-16:30 / {t('friday')}: 08:00-14:00
        </Typography.Text>
      </div>
      <div className="footer-column">
        <Typography.Text
          strong
          className="col-header"
        >
          {t('partnerInstitutions')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          e-albania.al
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          qkb.gov.al
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          tatime.gov.al
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          vet.al
        </Typography.Text>
      </div>
      <div className="footer-column">
        <Typography.Text
          strong
          className="col-header"
        >
          {t('mostValuedServices')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('searchForJob')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('announceAJob')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('unemploymentBenefit')}
        </Typography.Text>
        <Typography.Text
          className="item"
          type="secondary"
        >
          {t('employmentIncentivePrograms')}
        </Typography.Text>
      </div>
    </AntFooter>
  );
};

export default Footer;
