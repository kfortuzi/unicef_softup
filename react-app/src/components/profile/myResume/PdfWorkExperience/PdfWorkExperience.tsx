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
      {workExperiences.map((experience, index) => (
        <ListItem
          title={omitFalsyValue(experience?.position)}
          key={index}
          titleStyle={styles.listTitle}
        >
          <Text style={styles.subTitle}>
            {`${formatDate(experience?.startDate)} - ${formatDate(experience?.endDate, t('present'))}`}
          </Text>
          <Text style={styles.subTitle}>{omitFalsyValue(experience?.position)}</Text>
          <Text style={styles.subTitle}>{omitFalsyValue(experience?.company)}</Text>
          <Text style={styles.content}>{omitFalsyValue(experience?.responsibilities)}</Text>
        </ListItem>
      ))}
    </>
  );
};

export default PdfWorkExperiences;
