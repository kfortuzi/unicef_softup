import { View, Text, Image } from '@react-pdf/renderer';

import styles from './PdfDrivingLicenseItemStyle';

interface PdfDrivingLicenseItemProps {
  drivingLicense: string;
}

const PdfDrivingLicenseItem: React.FC<PdfDrivingLicenseItemProps> = ({ drivingLicense }) => {
  return (
    <View
      style={styles.drivingLicenseContainer}
    >
      <Image
        src={'https://cdn-icons-png.flaticon.com/512/1023/1023397.png'}
        style={styles.drivingLicenseImage}
      />
      <Text style={styles.drivingLicensText}>{drivingLicense}</Text>
    </View>
  );
}

export default PdfDrivingLicenseItem;
