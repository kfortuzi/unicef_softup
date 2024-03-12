import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  drivingLicenceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    border: 1,
    borderColor: 'gray',
    width: 60,
    borderRadius: 5,
  },
  drivingLicenceImage: {
    borderRight: 1,
    width: 30,
    height: 30,
    padding: 5,
  },
  drivingLicensText: {
    fontFamily: 'Roboto',
    fontSize: 12,
  },
});

export default styles;
