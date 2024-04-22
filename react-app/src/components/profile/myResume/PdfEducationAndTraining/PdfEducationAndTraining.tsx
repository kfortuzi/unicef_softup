import { Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { Education } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';

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
          // eslint-disable-next-line max-len
          title={`${education.title} - ${formatDate(education?.startDate)} - ${formatDate(education?.endDate), t('present')}`}
          key={index}
          titleStyle={styles.listTitle}
        >
          <Text style={styles.subTitle}>{`${education.type}`}</Text>
          <Text>{education.location}</Text>
        </PdfListItem>
      ))}
    </>
  );
};

export default PdfEducationAndTrainings;
