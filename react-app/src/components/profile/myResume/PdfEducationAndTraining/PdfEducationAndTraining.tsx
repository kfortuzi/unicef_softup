import { Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { Education } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import PdfListItem from '../PdfListItem/PdfListItem';
import styles from './PdfEducationAndTrainingStyle';

interface PdfEducationAndTraining extends Education { }

interface PdfEducationAndTrainingsProps {
  educationAndTrainings: PdfEducationAndTraining[];
}

const PdfEducationAndTrainings: React.FC<PdfEducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <>
      {educationAndTrainings.map((education, index) => (
        <PdfListItem
          title={omitFalsyValue(education?.title)}
          key={index}
          titleStyle={styles.listTitle}
        >
          <Text style={styles.subTitle}>
            {`${formatDate(education?.startDate)} - ${formatDate(education?.endDate, t('present'))}`}
          </Text>
          <Text style={styles.subTitle}>{`${omitFalsyValue(education?.type)}`}</Text>
          <Text>{omitFalsyValue(education?.location)}</Text>
        </PdfListItem>
      ))}
    </>
  );
};

export default PdfEducationAndTrainings;
