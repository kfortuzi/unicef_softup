import { View, Text, Image } from '@react-pdf/renderer';

import styles from './PdfDrivingLicenceItemStyle';

interface PdfDrivingLicenceItemProps {
  drivingLicences: string[];
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
        <Text style={styles.drivingLicensText}>{drivingLicence}</Text>
      </View>
    );
  });

  return drivingLicenceItems;
};

export default PdfDrivingLicenceItem;
