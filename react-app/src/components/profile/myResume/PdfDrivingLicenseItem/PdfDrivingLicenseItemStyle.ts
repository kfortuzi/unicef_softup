import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  drivingLicenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    border: 1,
    borderColor: 'gray',
    width: 60,
    borderRadius: 5,
  },
  drivingLicenseImage: {
    borderRight: 1,
    width: 30,
    height: 30,
    padding: 5,
  },
  drivingLicensText: {
    fontWeight: 'bold',
    fontSize: 11,
  },
});

export default styles;
