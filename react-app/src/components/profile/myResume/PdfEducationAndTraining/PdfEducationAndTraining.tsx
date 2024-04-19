import { Text } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Education } from 'src/api/resumes/types';

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
          title={`${education.title} - ${education.startDate ? dayjs(education.startDate).format('MMM YYYY') : ''} - ${education.endDate ? dayjs(education.endDate).format('MMM YYYY') : t('present')}`}
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
