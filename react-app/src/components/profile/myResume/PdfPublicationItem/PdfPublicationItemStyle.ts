import { StyleSheet } from '@react-pdf/renderer';

const listTitleFontSize = 15;

const styles = StyleSheet.create({
  publicationName: {
    fontWeight: 'bold',
    fontSize: listTitleFontSize,
  },
  publicationDate: {
    fontSize: 11,
    fontWeight: 'light',
  },
  publicationLink: {
    fontSize: 11,
    fontWeight: 'light',
  },
});

export default styles;
