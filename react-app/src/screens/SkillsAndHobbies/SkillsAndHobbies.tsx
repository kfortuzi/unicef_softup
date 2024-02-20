import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import HobbiesEditForm from 'src/components/profile/skillsAndHobbies/HobbiesEditForm/HobbiesEditForm';
import HobbiesView from 'src/components/profile/skillsAndHobbies/HobbiesView/HobbiesView';
import SkillsEditForm from 'src/components/profile/skillsAndHobbies/SkillsEditForm/SkillsEditForm';
import SkillsView from 'src/components/profile/skillsAndHobbies/SkillsView/SkillsView';
import useToggleEditMode from 'src/utils/useToggleEditMode';

const SkillsAndHobbies: React.FC = () => {
  const [isSkillEditMode, toggleIsSkillEditMode] = useToggleEditMode();
  const [isHobbyEditMode, toggleIsHobbyEditMode] = useToggleEditMode();
  const { t } = useTranslation('translation', { keyPrefix: 'profile.skillsAndHobbies' });

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
        gutter={[20, 20]}
      >
        <Col span={12}>
          <h2>{t('skills')}</h2>
          {!isSkillEditMode ? (
            <SkillsView toggleEditMode={toggleIsSkillEditMode} />
          ) : (
            <SkillsEditForm toggleEditMode={toggleIsSkillEditMode} />
          )}
        </Col>
      </Row>
      <Row
        justify="center"
        align="middle"
        gutter={[20, 20]}
      >
        <Col span={12}>
          <h2>{t('hobbies')}</h2>
          {!isHobbyEditMode ? (
            <HobbiesView toggleEditMode={toggleIsHobbyEditMode} />
          ) : (
            <HobbiesEditForm toggleEditMode={toggleIsHobbyEditMode} />
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SkillsAndHobbies;
