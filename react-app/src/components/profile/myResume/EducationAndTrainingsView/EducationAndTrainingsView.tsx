import { useTranslation } from 'react-i18next';

import { Education } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';

import ListItem from '../ListItem/ListItem';

type EducationAndTraining = Education;

interface EducationAndTrainingsProps {
  educationAndTrainings?: EducationAndTraining[];
}

const EducationAndTrainings: React.FC<EducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <>
      {educationAndTrainings?.map((education, index) => {
        return (
          <ListItem
            title={`
            ${education.title} 
            - ${formatDate(education?.startDate)} 
            - ${formatDate(education?.endDate), t('present')} 
        `}
            key={index}
            titleStyle={{ color: 'blue' }}
          >
            <p className="education-subtitle">{education.type}</p>
            <p>{education.location}</p>
          </ListItem>
        );
      })}
    </>
  );
};

export default EducationAndTrainings;
