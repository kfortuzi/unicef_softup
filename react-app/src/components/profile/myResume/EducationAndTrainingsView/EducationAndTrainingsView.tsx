import { useTranslation } from 'react-i18next';

import { Education } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import ListItem from '../ListItem/ListItem';

type EducationAndTraining = Education;

interface EducationAndTrainingsProps {
  educationAndTrainings?: EducationAndTraining[];
}

const EducationAndTrainings: React.FC<EducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  const prepareEducationTitle = (education: Education) => {
    let title = '';
    if (!education) return title;
    if (education.title) title += omitFalsyValue(education.title);
    if (education.startDate) title += ` - ${formatDate(education.startDate)}`;
    if (education.endDate) title += ` - ${formatDate(education.endDate)}, ${t('present')}`;

    return title;
  }

  return (
    <>
      {educationAndTrainings?.map((education, index) => {
        return (
          <ListItem
            title={prepareEducationTitle(education)}
            key={index}
            titleStyle={{ color: 'blue' }}
          >
            <p className="education-subtitle">{omitFalsyValue(education?.type)}</p>
            <p>{omitFalsyValue(education?.location)}</p>
          </ListItem>
        );
      })}
    </>
  );
};

export default EducationAndTrainings;
