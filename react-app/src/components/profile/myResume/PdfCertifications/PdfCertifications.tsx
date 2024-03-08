import { Text } from '@react-pdf/renderer';

import { Certification } from 'src/api/resumes/types';

import PdfListItem from '../PdfListItem/PdfListItem';
import styles from './PdfCertificationsStyle';

interface PdfCertificationsProps {
  certifications: Certification[];
}

const PdfCertifications: React.FC<PdfCertificationsProps> = (props) => {
  const { certifications } = props;

  const experiences = certifications.map((certification, index) => {
    return (
      <PdfListItem
        title={certification.name}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text>Recieved Date: {certification.receivedDate}</Text>
        {certification.expirationDate && <Text>{`Expires in ${certification.expirationDate}`}</Text>}
      </PdfListItem>
    );
  });

  return experiences;
};

export default PdfCertifications;
