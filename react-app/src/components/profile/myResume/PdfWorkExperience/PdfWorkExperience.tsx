import { Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { WorkExperience } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import ListItem from '../PdfListItem/PdfListItem';
import styles from './PdfWorkExperienceStyle';

interface PdfWorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const PdfWorkExperiences: React.FC<PdfWorkExperiencesProps> = (props) => {
  const { workExperiences } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <>
      {workExperiences.map((workExperience, index) => (
        <ListItem
          // eslint-disable-next-line max-len
          title={`${omitFalsyValue(workExperience.position)} - ${formatDate(workExperience?.startDate)} - ${formatDate(workExperience?.endDate), t('present')}`}
          key={index}
          titleStyle={styles.listTitle}
        >
          <Text style={styles.subTitle}>{omitFalsyValue(workExperience.position)}</Text>
          <Text>{omitFalsyValue(workExperience.company)}</Text>
          <Text>{omitFalsyValue(workExperience.responsibilities)}</Text>
        </ListItem>
      ))}
    </>
  );
};

export default PdfWorkExperiences;
