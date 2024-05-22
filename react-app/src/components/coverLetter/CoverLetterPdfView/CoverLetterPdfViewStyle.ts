import { Font, StyleSheet } from '@react-pdf/renderer';

import Bold from '../../../assets/fonts/Poppins-Bold.ttf';
import BoldItalic from '../../../assets/fonts/Poppins-BoldItalic.ttf';
import Italic from '../../../assets/fonts/Poppins-Italic.ttf';
import Light from '../../../assets/fonts/Poppins-Light.ttf';
import Regular from '../../../assets/fonts/Poppins-Regular.ttf';
import Thin from '../../../assets/fonts/Poppins-Thin.ttf';

const primaryColor = '#e53f25';
const small = 8;
const medium = 16;
const large = 24;

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
  coverLetterLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: small,
    margin: large,
    fontFamily: 'Poppins',
  },
  coverLetterPersonalInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: medium,
    borderBottom: `2px solid ${primaryColor}`,
    padding: medium,
  },
  coverLetterPersonalInfoTitle: {
    fontSize: large,
    color: primaryColor,
    marginBottom: large,
  },
  coverLetterPersonalInfoIcon: {
    width: medium,
    height: medium,
    margin: 0,
    padding: 0,
  },
  coverLetterPersonalInfoContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: medium,
  },
  coverLetterInfoItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: small,
    alignItems: 'center',
  },
  coverLetterBody: {
    display: 'flex',
    flexDirection: 'column',
    margin: medium,
    gap: medium,
    fontWeight: 'light',
    lineHeight: 1.2,
  },
});

export default styles;
