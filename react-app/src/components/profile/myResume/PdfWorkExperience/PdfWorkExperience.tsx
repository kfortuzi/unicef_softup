import { Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { WorkExperience } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import PdfListItem from '../PdfListItem/PdfListItem';
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
        <PdfListItem
          title={omitFalsyValue(experience?.position)}
          key={index}
          titleStyle={styles.listTitle}
        >
          <View style={styles.subTitle}>
            <Text>
              {`${formatDate(experience?.startDate)} - ${formatDate(experience?.endDate, t('present'))}`}
            </Text>
            <Text>{omitFalsyValue(experience?.company)}</Text>
          </View>
          <Text style={styles.content}>{omitFalsyValue(experience?.responsibilities)}</Text>
        </PdfListItem>
      ))}
    </>
  );
};

export default PdfWorkExperiences;
