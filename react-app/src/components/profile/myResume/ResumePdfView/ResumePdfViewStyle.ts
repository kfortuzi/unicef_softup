import { Font, StyleSheet } from '@react-pdf/renderer';

import Bold from '../../../../assets/fonts/Poppins-Bold.ttf';
import BoldItalic from '../../../../assets/fonts/Poppins-BoldItalic.ttf';
import Italic from '../../../../assets/fonts/Poppins-Italic.ttf';
import Light from '../../../../assets/fonts/Poppins-Light.ttf';
import Regular from '../../../../assets/fonts/Poppins-Regular.ttf';
import Thin from '../../../../assets/fonts/Poppins-Thin.ttf';

const titleFontSize = 20;
const subTitleFontSize = 14;

Font.register({
  family: 'Poppins',
  fonts: [
    { src: Thin, fontWeight: 'thin' },
    { src: Light, fontWeight: 'light' },
    { src: Regular },
    { src: Bold, fontWeight: 'bold' },
    { src: Italic, fontStyle: 'italic' },
    { src: BoldItalic, fontWeight: 'bold', fontStyle: 'italic' },
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
