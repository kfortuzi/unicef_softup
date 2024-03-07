import { Text } from '@react-pdf/renderer';

import { WorkExperience } from 'src/api/resumes/types';

import ListItem from '../PdfListItem/PdfListItem';
import styles from './PdfWorkExperienceStyle';

interface PdfWorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const PdfWorkExperiences: React.FC<PdfWorkExperiencesProps> = (props) => {
  const { workExperiences } = props;

  const experiences = workExperiences.map((workExperience, index) => {
    return (
      <ListItem
        title={`${workExperience.startDate} - ${workExperience.endDate || ''}`}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text style={styles.subTitle}>{workExperience.position}</Text>
        <Text>{workExperience.company}</Text>
        <Text>{workExperience.responsibilities}</Text>
      </ListItem>
    );
  });

  return experiences;
};

export default PdfWorkExperiences;
