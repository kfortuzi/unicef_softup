import { Col, GetProp, Image, Row, Typography, Upload, UploadProps, message } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import PlaceHolderImage from 'src/assets/images/user-placeholder.jpeg';
import Button from 'src/components/common/Button/Button';
import PersonalInfoDescription from 'src/components/profile/personalInfo/PersonalInfoDescription/PersonalInfoDescription';
import PersonalInfoEditForm from 'src/components/profile/personalInfo/PersonalInfoEditForm/PersonalInfoEditForm';
import config from 'src/config';
import i18n from 'src/locales';
import { Route } from 'src/router/enums';
import { beforeUpload, getBase64 } from 'src/utils/imageUtils';
import { LocalStorageKey, getItem } from 'src/utils/storage';
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });
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
      }
      else if (info.file.status === 'done') {
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
    <div className='personal-info-container'>
      <Typography.Title className='title'>{t('header')}</Typography.Title>
      <Row
        justify="space-between"
        gutter={[32, 32]}
      >
        <Col
          xs={24}
          sm={24}
          md={8}
          xl={8}
          xxl={8}
        >
          <Image
            preview={false}
            width={200}
            src={imageUrl || user?.profilePicture}
            fallback={PlaceHolderImage}
          />
          <Upload {...uploadProps} beforeUpload={beforeUpload}>
            <Button
              type="primary"
              text={i18n.t('globalStrings.changePhotoButtonText')}
              onClick={() => navigate(Route.PERSONAL_INFO)}
              style={{ marginTop: '20px' }}
              loading={loading}
            />
          </Upload>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          xl={12}
          xxl={12}
        >
          {isEditMode ? (
            <PersonalInfoEditForm toggleEditMode={toggleIsEditForm} />
          ) : (
            <PersonalInfoDescription toggleEditMode={toggleIsEditForm} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default PersonalInfo;
