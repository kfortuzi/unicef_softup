import { View, Text, Image } from '@react-pdf/renderer';

import styles from './DrivingLicenseItemStyle';

interface DrivingLicense {
  drivingLicense: string;
}

interface DrivingLicenseItemProps {
  drivingLicenses: DrivingLicense[];
}

const DrivingLicenseItem: React.FC<DrivingLicenseItemProps> = ({ drivingLicenses }) => {
  const drivingLicenseItems = drivingLicenses.map((drivingLicense, index) => {
    return (
      <View
        style={styles.drivingLicenseContainer}
        key={index}
      >
        <Image
          src={'https://cdn-icons-png.flaticon.com/512/1023/1023397.png'}
          style={styles.drivingLicenseImage}
        />
        <Text style={styles.drivingLicensText}>{drivingLicense.drivingLicense}</Text>
      </View>
    );
  });

  return drivingLicenseItems;
};

export default DrivingLicenseItem;
