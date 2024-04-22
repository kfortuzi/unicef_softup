import { Col, Image, Row, Upload, UploadProps, message } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import Button from 'src/components/common/Button/Button';
import PersonalInfoDescription from 'src/components/profile/personalInfo/PersonalInfoDescription/PersonalInfoDescription';
import PersonalInfoEditForm from 'src/components/profile/personalInfo/PersonalInfoEditForm/PersonalInfoEditForm';
import config from 'src/config';
import i18n from 'src/locales';
import { Route } from 'src/router/enums';
import { LocalStorageKey, getItem } from 'src/utils/storage';

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });
  const toggleIsEditForm = () => {
    setIsEditMode((currentIsEdit) => !currentIsEdit);
  };

  const { data: user, refetch } = useGetProfile();

  const uploadProps: UploadProps = {
    name: 'file',
    action: `${config.API_BASE_URL}/user/upload-photo`,
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
        refetch();
      } else if (info.file.status === 'error') {
        message.error(i18n.t('globalStrings.uploadError'));
      }
    },
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1 style={{ alignSelf: 'center' }}>{t('header')}</h1>
      <Row
        justify="center"
        align="middle"
        gutter={[16, 16]}
      >
        <Col
          xs={24}
          sm={24}
          md={8}
          xl={8}
          xxl={8}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            preview={false}
            width={200}
            src={user?.profilePicture}
            fallback="/src/assets/images/profile-placeholder.png"
          />
          <Upload {...uploadProps}>
            <Button
              type="primary"
              text={i18n.t('globalStrings.changePhotoButtonText')}
              onClick={() => navigate(Route.PERSONAL_INFO)}
              style={{ marginTop: '20px' }}
            />
          </Upload>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          xl={12}
          xxl={12}

          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
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
