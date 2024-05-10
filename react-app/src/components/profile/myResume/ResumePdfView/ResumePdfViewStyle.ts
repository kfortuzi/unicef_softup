import { Font, StyleSheet } from '@react-pdf/renderer';

const titleFontSize = 20;
const subTitleFontSize = 14;

Font.register({
  family: 'Poppins',
  fonts: [
    { src: 'src/assets/fonts/Poppins-Thin.ttf', fontWeight: 'thin'},
    { src: 'src/assets/fonts/Poppins-Light.ttf', fontWeight: 'light' },
    { src: 'src/assets/fonts/Poppins-Regular.ttf' },
    { src: 'src/assets/fonts/Poppins-Bold.ttf', fontWeight: 'bold' },
    { src: 'src/assets/fonts/Poppins-Italic.ttf', fontStyle: 'italic' },
    { src: 'src/assets/fonts/Poppins-BoldItalic.ttf', fontWeight: 'bold', fontStyle: 'italic' },
  ],
});

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Poppins',
    flex: 12,
    flexDirection: 'row',
  },
  contentSection: {
    flex: 9,
    paddingVertical: 20,
    paddingRight: 30,
  },
  sectionTitle: {
    fontSize: titleFontSize,
    fontWeight: 'bold',
  },
  sectionSubTitle: {
    fontWeight: 'bold',
    fontSize: subTitleFontSize,
  },
  sectionText: {
    fontWeight: 'light',
    fontSize: 12,
  },
  section: {
    padding: 10,
    gap: 5,
  },
  list: {
    padding: 10,
    gap: 20,
  },
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
});

export default styles;
