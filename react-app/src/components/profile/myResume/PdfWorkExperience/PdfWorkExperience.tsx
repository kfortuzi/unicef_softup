import { Text } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { WorkExperience } from 'src/api/resumes/types';

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
          title={`${workExperience.position} - ${workExperience.startDate ? dayjs(workExperience.startDate).format('MMM YYYY') : ''} - ${workExperience.endDate ? dayjs(workExperience.endDate).format('MMM YYYY') : t('present')}`}
          key={index}
          titleStyle={styles.listTitle}
        >
          <Text style={styles.subTitle}>{workExperience.position}</Text>
          <Text>{workExperience.company}</Text>
          <Text>{workExperience.responsibilities}</Text>
        </ListItem>
      ))}
    </>
  );
};

export default PdfWorkExperiences;
