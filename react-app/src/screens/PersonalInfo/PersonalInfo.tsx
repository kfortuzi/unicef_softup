import { CloudUploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { Col, GetProp, Image, Row, Upload, UploadProps, message } from 'antd';
import React, { useState } from 'react';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import PlaceHolderImage from 'src/assets/images/user-placeholder.jpeg';
import PersonalInfoDescription from 'src/components/profile/personalInfo/PersonalInfoDescription/PersonalInfoDescription';
import PersonalInfoEditForm from 'src/components/profile/personalInfo/PersonalInfoEditForm/PersonalInfoEditForm';
import config from 'src/config';
import i18n from 'src/locales';
import { beforeUpload, getBase64 } from 'src/utils/imageUtils';
import { LocalStorageKey, getItem } from 'src/utils/storage';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const PersonalInfo: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const toggleIsEditForm = () => {
    setIsEditMode((currentIsEdit) => !currentIsEdit);
  };

  const { data: user } = useGetProfile();

  const uploadProps: UploadProps = {
    name: 'file',
    action: `${config.API_BASE_URL}/user/upload-photo`,
    showUploadList: false,
    headers: {
      authorization: `Bearer ${getItem<string>(LocalStorageKey.USER_SESSION_TOKEN) || ''}`,
    },
    onChange(info) {
      if (info.file.status === 'uploading') {
        setLoading(true);

        return;
      } else if (info.file.status === 'done') {
        message.success(i18n.t('globalStrings.uploadSuccess'));
        getBase64(info.file.originFileObj as FileType, (url) => {
          setLoading(false);
          setImageUrl(url);
        });
      } else if (info.file.status === 'error') {
        message.error(i18n.t('globalStrings.uploadError'));
      }
    },
  };

  return (
    <Row className="personal-info-container">
      <Col className={`image-upload-container ${loading ? 'loading' : ''}`}>
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
              <span className="info">{i18n.t('globalStrings.changePhotoButtonText')}</span>
            </div>
          )}
          <Image
            preview={false}
            width={150}
            height={150}
            src={imageUrl || user?.profilePicture}
            fallback={PlaceHolderImage}
          />
        </Upload>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={16}
        xl={16}
        xxl={16}
      >
        {isEditMode ? (
          <PersonalInfoEditForm toggleEditMode={toggleIsEditForm} />
        ) : (
          <PersonalInfoDescription toggleEditMode={toggleIsEditForm} />
        )}
      </Col>
    </Row>
  );
};

export default PersonalInfo;
