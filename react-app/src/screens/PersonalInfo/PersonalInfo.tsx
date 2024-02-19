import { Col, Image, Row } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Button from 'src/components/common/Button/Button';
import PersonalInfoDescription from 'src/components/profile/personalInfo/PersonalInfoDescription/PersonalInfoDescription';
import PersonalInfoEditForm from 'src/components/profile/personalInfo/PersonalInfoEditForm/PersonalInfoEditForm';
import { Route } from 'src/router/enums';

const PersonalInfo: React.FC = () => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });
  const toggleIsEditForm = () => {
    setIsEditMode((currentIsEdit) => !currentIsEdit);
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
      >
        <Col span={6}>
          <Image
            preview={false}
            width="50%"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <Button
            type="primary"
            text="Change Photo"
            onClick={() => navigate(Route.PERSONAL_INFO)}
            style={{ marginTop: '20px' }}
          />
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
