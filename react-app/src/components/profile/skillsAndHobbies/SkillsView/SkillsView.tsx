import { Tag } from 'antd';
import React, { useEffect, useState } from 'react';

import useGetSkills from 'src/api/users/hooks/useGetSkills';
import Button from 'src/components/common/Button/Button';
import i18n from 'src/locales';

interface Props {
  toggleEditMode: VoidFunction;
}

const SkillsView: React.FC<Props> = ({ toggleEditMode }) => {
  const { data: skills } = useGetSkills();
  const [tagColors, setTagColors] = useState<string[]>([]);

  useEffect(() => {
    if (skills) {
      const colors = skills.map(() => '#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0'));
      setTagColors(colors);
    }
  }, [skills]);

  return (
    <div className="profile-form-view">
      <div className="info-group">
        {skills?.map((skill) => (
          <Tag
            key={skill.id}
            color={tagColors[skills.indexOf(skill)]}
          >
            {skill.name}
          </Tag>
        ))}
      </div>
      <div className="info-group">
        <Button
          type="primary"
          text={i18n.t('globalStrings.edit')}
          onClick={toggleEditMode}
          style={{ marginTop: '20px' }}
        />
      </div>
    </div>
  );
};

export default SkillsView;
