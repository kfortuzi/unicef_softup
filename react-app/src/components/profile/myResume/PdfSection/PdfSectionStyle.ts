import { StyleSheet } from '@react-pdf/renderer';

const titleFontSize = 20;
const subTitleFontSize = 14;

const styleSheet = StyleSheet.create({
  sectionTitle: {
    fontSize: titleFontSize,
    fontWeight: 'bold',
  },
  sectionSubTitle: {
    fontSize: subTitleFontSize,
  },
  section: {
    padding: 10,
    gap: 5,
  },
});

export default styleSheet;
