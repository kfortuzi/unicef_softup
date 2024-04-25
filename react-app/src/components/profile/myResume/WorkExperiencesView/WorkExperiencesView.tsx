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
      {workExperiences.map((workExperience, index) => {
        return (
          <ListItem
            title={`${omitFalsyValue(workExperience?.position)}
          - ${formatDate(workExperience?.startDate)} 
          - ${formatDate(workExperience?.endDate, t('present'))}`}
            key={index}
            titleStyle={{ color: 'blue' }}
          >
            <p className="work-experience-title">{omitFalsyValue(workExperience?.position)}</p>
            <p>{omitFalsyValue(workExperience?.company)}</p>
            <p>{omitFalsyValue(workExperience?.responsibilities)}</p>
          </ListItem>
        );
      })}
    </>
  );
};

export default WorkExperiencesView;
