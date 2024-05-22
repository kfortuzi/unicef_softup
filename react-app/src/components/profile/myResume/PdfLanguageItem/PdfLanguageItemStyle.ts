import { StyleSheet } from '@react-pdf/renderer';

const listTitleFontSize = 15;

const styles = StyleSheet.create({
  languageTitle: {
    fontWeight: 'bold',
    fontSize: listTitleFontSize,
  },
  languageLevelContainer: {
    fontSize: 11,
    display: 'flex',
    flexDirection: 'row',
  },
  languageLevelText: {
    minWidth: 70,
    fontWeight: 'light',
    fontSize: 11,
  },
});

export default styles;
