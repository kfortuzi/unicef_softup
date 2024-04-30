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

  const prepareWorkExperienceTitle = (workExperience: WorkExperience) => {
    let workExperienceTitle = '';
    if (!workExperience) {
      return workExperienceTitle;
    }

    if (workExperience?.position) {
      workExperienceTitle += `${workExperience.position}`;
    }
    if (workExperience?.startDate) {
      workExperienceTitle += ` - ${formatDate(workExperience.startDate)}`;
    }
    if (workExperience?.endDate) {
      workExperienceTitle += ` - ${formatDate(workExperience.endDate, t('present'))}`;
    }

    return workExperienceTitle;
  }

  return (
    <>
      {workExperiences.map((workExperience, index) => {
        return (
          <ListItem
            title={prepareWorkExperienceTitle(workExperience)}
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
