import { useTranslation } from 'react-i18next';

interface ContactInfoViewProps {
  profilePicture?: string;
  imgUrl?: string;
  name?: string;
  nationality?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  linkedinUrl?: string;
  linkedinText?: string;
}

const ContactInfoView: React.FC<ContactInfoViewProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.contactInfoSection' });
  const { profilePicture, name, nationality, phoneNumber, email, linkedinUrl, address, linkedinText } = props;

  return (
    <div className="contact-info-view-section">
      <div className="profile-pic-section">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className="profile-pic"
        />
        <p className="name">{name}</p>
      </div>
      <div className="info-section">
        <div className="info-group">
          <p className="group-title">{t('nationality')}</p>
          <p className="group-value">{nationality}</p>
        </div>
        <div className="info-group">
          <p className="group-title">{t('phoneNumber')}</p>
          <p className="group-value">{phoneNumber}</p>
        </div>
        <div className="info-group">
          <p className="group-title">{t('email')}</p>
          <p className="group-value">{email}</p>
        </div>
        <div className="info-group">
          <p className="group-title">{t('linkedin')}</p>
          <a
            href={linkedinUrl}
            className="group-value linkedin-link"
          >
            {linkedinText}
          </a>
        </div>
        <div className="info-group">
          <p className="group-title">{t('address')}</p>
          <p className="group-value">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoView;
