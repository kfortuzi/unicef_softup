import { Col, Row, Typography } from 'antd';
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
    <div className="skills-and-hobbies-container profile-page-content">
      <Row>
        <Col span={24}>
          <Typography.Title
            className="title"
            level={4}
          >
            {t('skills')}
          </Typography.Title>
          {!isSkillEditMode ? (
            <SkillsView toggleEditMode={toggleIsSkillEditMode} />
          ) : (
            <SkillsEditForm toggleEditMode={toggleIsSkillEditMode} />
          )}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Typography.Title level={4}>{t('hobbies')}</Typography.Title>
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
