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
    <>
      {workExperiences.map((experience, index) => {
        return (
          <ListItem
            title={omitFalsyValue(experience?.position)}
            key={index}
            titleStyle={{ color: 'blue' }}
          >
            <p className="work-experience-title">
              {`${formatDate(experience.startDate)} - ${formatDate(experience.endDate, t('present'))}`}
            </p>
            <p>{omitFalsyValue(experience?.company)}</p>
            <p>{omitFalsyValue(experience?.responsibilities)}</p>
          </ListItem>
        );
      })}
    </>
  );
};

export default WorkExperiencesView;
