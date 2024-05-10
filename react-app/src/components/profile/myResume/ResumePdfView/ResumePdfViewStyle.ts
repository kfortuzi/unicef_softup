import { Font, StyleSheet } from '@react-pdf/renderer';

const titleFontSize = 20;
const subTitleFontSize = 14;

const root = import.meta.env.DEV ? 'src/assets' : 'assets';

Font.register({
  family: 'Poppins',
  fonts: [
    { src: `${root}/fonts/Poppins-Thin.ttf`, fontWeight: 'thin' },
    { src: `${root}/fonts/Poppins-Light.ttf`, fontWeight: 'light' },
    { src: `${root}/fonts/Poppins-Regular.ttf` },
    { src: `${root}/fonts/Poppins-Bold.ttf`, fontWeight: 'bold' },
    { src: `${root}/fonts/Poppins-Italic.ttf`, fontStyle: 'italic' },
    { src: `${root}/fonts/Poppins-BoldItalic.ttf`, fontWeight: 'bold', fontStyle: 'italic' },
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
