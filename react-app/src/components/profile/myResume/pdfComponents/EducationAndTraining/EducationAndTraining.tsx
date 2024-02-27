import { Text } from '@react-pdf/renderer';

import ListItem from '../ListItem/ListItem';
import styles from './EducationAndTrainingStyle';

interface EducationAndTraining {
  schoolName: string;
  fieldOfStudy?: string;
  degree?: string;
  grade?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  location?: string;
}

interface EducationAndTrainingsProps {
  educationAndTrainings: EducationAndTraining[];
}

const EducationAndTrainings: React.FC<EducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;

  const experiences = educationAndTrainings.map((education, index) => {
    return (
      <ListItem
        title={`${education.startDate} - ${education.endDate} - ${education.location}`}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text style={styles.subTitle}>{`${education.degree} - ${education.fieldOfStudy}`}</Text>
        <Text>{education.schoolName}</Text>
      </ListItem>
    );
  });

  return experiences;
};

export default EducationAndTrainings;
