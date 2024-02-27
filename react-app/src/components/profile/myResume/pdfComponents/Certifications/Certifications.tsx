import { Text } from '@react-pdf/renderer';

import ListItem from '../ListItem/ListItem';
import styles from './CertificationsStyle';

type Certification = {
  title: string;
  companyName: string;
  description?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
};

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = (props) => {
  const { certifications } = props;

  const experiences = certifications.map((certification, index) => {
    return (
      <ListItem
        title={certification.title}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text>{certification.companyName}</Text>
        <Text>{certification.description}</Text>
        {certification.endDate && <Text>{`Expires in ${certification.endDate}`}</Text>}
      </ListItem>
    );
  });

  return experiences;
};

export default Certifications;
