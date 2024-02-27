import { StyleSheet } from '@react-pdf/renderer';

const listTitleFontSize = 15;

const styles = StyleSheet.create({
  volunteeringTitle: {
    fontWeight: 'bold',
    fontSize: listTitleFontSize,
  },
  volunteeringOrganization: {
    fontSize: 12,
  },
  volunteeringDate: {
    fontSize: 12,
  },
});

export default styles;
