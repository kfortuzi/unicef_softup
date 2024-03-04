import { Text } from '@react-pdf/renderer';

import ListItem from '../PdfListItem/PdfListItem';
import styles from './PdfWorkExperienceStyle';

interface PdfWorkExperience {
  title: string;
  companyName: string;
  description?: string;
  location?: string;
  startDate: string;
  endDate?: string;
}

interface PdfWorkExperiencesProps {
  workExperiences: PdfWorkExperience[];
}

const PdfWorkExperiences: React.FC<PdfWorkExperiencesProps> = (props) => {
  const { workExperiences } = props;

  const experiences = workExperiences.map((workExperience, index) => {
    return (
      <ListItem
        title={`${workExperience.startDate} - ${workExperience.endDate || ''} - ${workExperience.location || ''}`}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text style={styles.subTitle}>{workExperience.title}</Text>
        <Text>{workExperience.companyName}</Text>
        <Text>{workExperience.description}</Text>
      </ListItem>
    );
  });

  return experiences;
};

export default PdfWorkExperiences;
