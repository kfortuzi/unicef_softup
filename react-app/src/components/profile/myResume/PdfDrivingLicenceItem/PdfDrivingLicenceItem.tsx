import { View, Text, Image } from '@react-pdf/renderer';

import { DrivingLicence } from 'src/api/resumes/types';

import styles from './PdfDrivingLicenceItemStyle';

interface PdfDrivingLicenceItemProps {
  drivingLicences: DrivingLicence[];
}

const PdfDrivingLicenceItem: React.FC<PdfDrivingLicenceItemProps> = ({ drivingLicences }) => {
  const drivingLicenceItems = drivingLicences.map((drivingLicence, index) => {
    return (
      <View
        style={styles.drivingLicenceContainer}
        key={index}
      >
        <Image
          src={'https://cdn-icons-png.flaticon.com/512/1023/1023397.png'}
          style={styles.drivingLicenceImage}
        />
        <Text style={styles.drivingLicensText}>{drivingLicence.level}</Text>
      </View>
    );
  });

  return drivingLicenceItems;
};

export default PdfDrivingLicenceItem;
