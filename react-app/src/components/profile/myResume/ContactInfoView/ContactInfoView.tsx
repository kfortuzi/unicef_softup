import { CloudUploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { Upload, UploadProps, message, Image, Typography, Avatar, GetProp } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddressIcon from 'src/assets/icons/address-icon.png';
import EmailIcon from 'src/assets/icons/email-icon.png';
import LinkedinIcon from 'src/assets/icons/linkedin-icon.png';
import NationalityIcon from 'src/assets/icons/nationality-icon.png';
import PhoneIcon from 'src/assets/icons/phone-icon.png';
import UserPlaceHolderImage from 'src/assets/images/user-placeholder.jpeg';
import config from 'src/config';
import i18n from 'src/locales';
import { beforeUpload, getBase64 } from 'src/utils/imageUtils';
import { LocalStorageKey, getItem } from 'src/utils/storage';
import { omitFalsyValue } from 'src/utils/stringUtils';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface ContactInfoViewProps {
  cvId: string;
  profilePicture?: string;
  imgUrl?: string;
  firstName?: string;
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
  const [imageKey, setImageKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)]),
  );

  const { cvId, firstName, nationality, phoneNumber, email, linkedinUrl, address, linkedinText, surname } =
    omittedFalsyProps;

  const uploadProps: UploadProps = {
    name: 'file',
    action: `${config.API_BASE_URL}/resumes/${cvId}/upload-photo`,
    showUploadList: false,
    headers: {
      authorization: `Bearer ${getItem<string>(LocalStorageKey.USER_SESSION_TOKEN) || ''}`,
    },
    accept: 'image/*',
    onChange(info) {
      if (info.file.status === 'uploading') {
        setLoading(true);

        return;
      } else if (info.file.status === 'done') {
        message.success(i18n.t('globalStrings.uploadSuccess'));
        getBase64(info.file.originFileObj as FileType, (url) => {
          setLoading(false);
          setImageUrl(url);
          setImageKey((prev) => prev + 1);
          window.location.reload();
        });
      } else if (info.file.status === 'error') {
        message.error(i18n.t('globalStrings.uploadError'));
      }
    },
  };

  return (
    <div className="contact-info-view-section">
      <div className="profile-pic-section">
        <div className={`image-upload-container ${loading ? 'loading' : ''}`}>
          <Upload
            {...uploadProps}
            beforeUpload={beforeUpload}
          >
            {loading ? (
              <div className="overlay">
                <LoadingOutlined />
              </div>
            ) : (
              <div className="overlay">
                <CloudUploadOutlined />
                <span className="info">{t('uploadProfilePicture')}</span>
              </div>
            )}
            <Avatar
              size={150}
              src={imageUrl || props.profilePicture || UserPlaceHolderImage}
              key={imageKey}
            />
          </Upload>
        </div>
        {/* <Upload
          {...uploadProps}
          beforeUpload={beforeUpload}
        >
          <Avatar
            size={150}
            src={imageUrl || props.profilePicture || UserPlaceHolderImage}
            key={imageKey}
          />
        </Upload> */}
        <p className="name">
          {firstName} {surname}
        </p>
      </div>
      <div className="info-section">
        <div className="info-group">
          <div className="group-title-container">
            <Image
              src={NationalityIcon}
              preview={false}
              className="contact-info-icon"
            />
            <Typography.Text className="group-title-text">{t('nationality')}</Typography.Text>
          </div>
          <p className="group-value">{nationality}</p>
        </div>
        <div className="info-group">
          <div className="group-title-container">
            <Image
              src={PhoneIcon}
              preview={false}
              className="contact-info-icon"
            />
            <Typography.Text className="group-title-text">{t('phoneNumber')}</Typography.Text>
          </div>
          <p className="group-value">{phoneNumber}</p>
        </div>
        <div className="info-group">
          <div className="group-title-container">
            <Image
              src={EmailIcon}
              preview={false}
              className="contact-info-icon"
            />
            <Typography.Text className="group-title-text">{t('email')}</Typography.Text>
          </div>
          <p className="group-value">{email}</p>
        </div>
        <div className="info-group">
          <div className="group-title-container">
            <Image
              src={LinkedinIcon}
              preview={false}
              className="contact-info-icon"
            />
            <Typography.Text className="group-title-text">{t('linkedin')}</Typography.Text>
          </div>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              className="group-value linkedin-link"
            >
              {linkedinText}
            </a>
          )}
        </div>
        <div className="info-group">
          <div className="group-title-container">
            <Image
              src={AddressIcon}
              preview={false}
              className="contact-info-icon"
            />
            <Typography.Text className="group-title-text">{t('address')}</Typography.Text>
          </div>
          <p className="group-value">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoView;
