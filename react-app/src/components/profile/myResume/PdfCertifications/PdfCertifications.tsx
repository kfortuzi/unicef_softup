import { Text } from '@react-pdf/renderer';

import PdfListItem from '../PdfListItem/PdfListItem';
import styles from './PdfCertificationsStyle';

type PdfCertification = {
  title: string;
  companyName: string;
  description?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
};

interface PdfCertificationsProps {
  certifications: PdfCertification[];
}

const PdfCertifications: React.FC<PdfCertificationsProps> = (props) => {
  const { certifications } = props;

  const experiences = certifications.map((certification, index) => {
    return (
      <PdfListItem
        title={certification.title}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text>{certification.companyName}</Text>
        <Text>{certification.description}</Text>
        {certification.endDate && <Text>{`Expires in ${certification.endDate}`}</Text>}
      </PdfListItem>
    );
  });

  return experiences;
};

export default PdfCertifications;
