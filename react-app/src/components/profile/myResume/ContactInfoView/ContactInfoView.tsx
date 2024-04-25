import { EditOutlined } from '@ant-design/icons';
import { Upload, UploadProps, message, Image } from 'antd';
import { useTranslation } from 'react-i18next';

import UserPlaceHolderImage from 'src/assets/images/user-placeholder.jpeg';
import Button from 'src/components/common/Button/Button';
import config from 'src/config';
import i18n from 'src/locales';
import { LocalStorageKey, getItem } from 'src/utils/storage';
import { omitFalsyValue } from 'src/utils/stringUtils';

interface ContactInfoViewProps {
  cvId: string;
  profilePicture?: string;
  imgUrl?: string;
  name?: string;
  nationality?: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  linkedinUrl?: string;
  linkedinText?: string;
  surname?: string;
}

const ContactInfoView: React.FC<ContactInfoViewProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.contactInfoSection' });

  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)])
  );

  const {
    cvId,
    name,
    nationality,
    phoneNumber,
    email,
    linkedinUrl,
    address,
    linkedinText,
    surname
  } = omittedFalsyProps;

  const uploadProps: UploadProps = {
    name: 'file',
    action: `${config.API_BASE_URL}/resumes/${cvId}/upload-photo`,
    showUploadList: false,
    headers: {
      authorization: `Bearer ${getItem<string>(LocalStorageKey.USER_SESSION_TOKEN) || ''}`,
    },
    accept: 'image/*',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        message.info(i18n.t('globalStrings.uploading'));
      }
      if (info.file.status === 'done') {
        message.success(i18n.t('globalStrings.uploadSuccess'));
        window.location.reload();
      } else if (info.file.status === 'error') {
        message.error(i18n.t('globalStrings.uploadError'));
      }
    },
  };

  return (
    <div className="contact-info-view-section">
      <div className="profile-pic-section">
        <Image
          src={props.profilePicture}
          preview={false}
          alt="Profile Picture"
          className="profile-pic"
          fallback={UserPlaceHolderImage}
        />
        <Upload {...uploadProps}>
          <Button
            text={t('uploadProfilePicture')}
            type="primary"
            icon={<EditOutlined />}
            size="middle"
            style={{ marginTop: '10px' }}
          />
        </Upload>
        <p className="name">
          {name} {surname}
        </p>
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
          {linkedinUrl && (
            <a href={linkedinUrl} className="group-value linkedin-link">
              {linkedinText}
            </a>
          )}
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
