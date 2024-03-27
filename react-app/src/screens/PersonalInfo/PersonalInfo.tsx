import { Col, Image, Row, Upload, UploadProps, message } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import useGetProfile from 'src/api/users/hooks/useGetProfile';
import Button from 'src/components/common/Button/Button';
import PersonalInfoDescription from 'src/components/profile/personalInfo/PersonalInfoDescription/PersonalInfoDescription';
import PersonalInfoEditForm from 'src/components/profile/personalInfo/PersonalInfoEditForm/PersonalInfoEditForm';
import config from 'src/config';
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
    action: `${config.API_BASE_URL}/user/uploadFile`,
    headers: {
      authorization: `Bearer ${getItem<string>(LocalStorageKey.USER_SESSION_TOKEN) || ''}`,
    },
    accept: 'image/*',
    onChange(info) {
      if (info.file.status !== 'uploading') {
        message.info(t('uploading'));
      }
      if (info.file.status === 'done') {
        message.success(t('uploadSuccess'));
        refetch();
      } else if (info.file.status === 'error') {
        message.error(t('uploadError'));
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
          span={6}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            preview={false}
            width="50%"
            src={user?.profilePicture}
            fallback="/src/assets/images/profile-placeholder.png"
          />
          <Upload {...uploadProps}>
            <Button
              type="primary"
              text={t('changePhotoButtonText')}
              onClick={() => navigate(Route.PERSONAL_INFO)}
              style={{ marginTop: '20px' }}
            />
          </Upload>
        </Col>
        <Col span={12}>
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
