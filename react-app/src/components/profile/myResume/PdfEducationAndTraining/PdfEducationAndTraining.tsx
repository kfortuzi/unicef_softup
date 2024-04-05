import { Text } from '@react-pdf/renderer';

import { Education } from 'src/api/resumes/types';

import PdfListItem from '../PdfListItem/PdfListItem';
import styles from './PdfEducationAndTrainingStyle';

interface PdfEducationAndTraining extends Education {}

interface PdfEducationAndTrainingsProps {
  educationAndTrainings: PdfEducationAndTraining[];
}

const PdfEducationAndTrainings: React.FC<PdfEducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;

  return (
    <>
      {educationAndTrainings.map((education, index) => (
        <PdfListItem
          title={`${education.startDate} - ${education.endDate} - ${education.title}`}
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
