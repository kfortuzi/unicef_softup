import { StyleSheet } from '@react-pdf/renderer';

const listTitleFontSize = 15;

const styles = StyleSheet.create({
  volunteeringTitle: {
    fontWeight: 'bold',
    fontSize: listTitleFontSize,
  },
  volunteeringOrganization: {
    fontSize: 11,
    fontWeight: 'light',
  },
  volunteeringDate: {
    fontSize: 11,
    fontWeight: 'light',
  },
});

export default styles;
