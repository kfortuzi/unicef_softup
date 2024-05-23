import { useTranslation } from 'react-i18next';

import { WorkExperience } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import ListItem from '../ListItem/ListItem';

interface WorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const WorkExperiencesView: React.FC<WorkExperiencesProps> = (props) => {
  const { workExperiences } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <div>
      {workExperiences.map((experience, index) => {
        return (
          <ListItem
            title={omitFalsyValue(experience?.position)}
            key={index}
            titleStyle={{ color: 'blue' }}
          >
            <div className="work-experience-title">
              <p>{`${formatDate(experience.startDate)} - ${formatDate(experience.endDate, t('present'))}`}</p>
              <p>{omitFalsyValue(experience?.company)}</p>
            </div>
            <p>{omitFalsyValue(experience?.responsibilities)}</p>
          </ListItem>
        );
      })}
    </div>
  );
};

export default WorkExperiencesView;
