import { Text } from '@react-pdf/renderer';

import PdfListItem from '../PdfListItem/PdfListItem';
import styles from './PdfEducationAndTrainingStyle';

interface PdfEducationAndTraining {
  schoolName: string;
  fieldOfStudy?: string;
  degree?: string;
  grade?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  location?: string;
}

interface PdfEducationAndTrainingsProps {
  educationAndTrainings: PdfEducationAndTraining[];
}

const PdfEducationAndTrainings: React.FC<PdfEducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;

  const educations = educationAndTrainings.map((education, index) => {
    return (
      <PdfListItem
        title={`${education.startDate} - ${education.endDate} - ${education.location}`}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text style={styles.subTitle}>{`${education.degree} - ${education.fieldOfStudy}`}</Text>
        <Text>{education.schoolName}</Text>
      </PdfListItem>
    );
  });

  return educations;
};

export default PdfEducationAndTrainings;
