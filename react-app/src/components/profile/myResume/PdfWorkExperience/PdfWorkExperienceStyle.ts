import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  listTitle: {
    fontWeight: 'bold',
    color: 'blue',
  },
  subTitle: {
    fontWeight: 'bold',
  },
  content: {
    fontWeight: 'light',
    flexShrink:1,
    flexWrap: 'wrap',
  },
});

export default styles;
