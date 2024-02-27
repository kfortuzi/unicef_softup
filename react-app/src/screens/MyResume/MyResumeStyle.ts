import { Font, StyleSheet } from '@react-pdf/renderer';

const titleFontSize = 20;
const subTitleFontSize = 14;

Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAw.ttf', fontWeight: 700 },
    { src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5Q.ttf', fontWeight: 400 },
  ],
});

const styles = StyleSheet.create({
  container: {
    flex: 9,
    flexDirection: 'row',
  },
  contentSection: {
    flex: 6,
    padding: 10,
  },
  sectionTitle: {
    fontSize: titleFontSize,
    fontWeight: 'bold',
  },
  sectionSubTitle: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: subTitleFontSize,
  },
  sectionText: {
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
