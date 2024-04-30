import { View, Text, Image } from '@react-pdf/renderer';

import DrivingLicenseIcon from 'src/assets/icons/driving-license-icon.png';
import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfDrivingLicenseItemStyle';

interface PdfDrivingLicenseItemProps {
  drivingLicense: string;
}

const PdfDrivingLicenseItem: React.FC<PdfDrivingLicenseItemProps> = ({ drivingLicense }) => {
  return drivingLicense ? (
    <View
      style={styles.drivingLicenseContainer}
    >
      <Image
        src={DrivingLicenseIcon}
        style={styles.drivingLicenseImage}
      />
      <Text style={styles.drivingLicensText}>{omitFalsyValue(drivingLicense)}</Text>
    </View>
  ) : null;
}

export default PdfDrivingLicenseItem;
