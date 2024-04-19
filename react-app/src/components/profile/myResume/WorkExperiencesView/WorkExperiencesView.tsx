import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { WorkExperience } from 'src/api/resumes/types';

import ListItem from '../ListItem/ListItem';

interface WorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const WorkExperiencesView: React.FC<WorkExperiencesProps> = (props) => {
  const { workExperiences } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <>
      {workExperiences.map((workExperience, index) => {
        return (
          <ListItem
            title={`${workExperience.position} 
          - ${workExperience.startDate ? dayjs(workExperience.startDate).format('MMM YYYY') : ''} 
          - ${workExperience.endDate ? dayjs(workExperience.endDate).format('MMM YYYY') : t('present')} `}
            key={index}
            titleStyle={{ color: 'blue' }}
          >
            <p className="work-experience-title">{workExperience.position}</p>
            <p>{workExperience.company}</p>
            <p>{workExperience.responsibilities}</p>
          </ListItem>
        );
      })}
    </>
  );
};

export default WorkExperiencesView;
