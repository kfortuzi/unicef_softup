import { StyleSheet } from '@react-pdf/renderer';

const listTitleFontSize = 15;

const styles = StyleSheet.create({
  listItem: {
    gap: 5,
    fontSize: 12,
  },

  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: listTitleFontSize,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 5,
    border: '2 solid blue',
  },

  listBody: {
    flexDirection: 'row',
    gap: 10,
  },
  listContentText: {
    fontSize: 12,
  },
  line: {
    marginHorizontal: 2,
    marginVertical: -10,
    width: 4,
    height: 'auto',
    borderRadius: 4,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
});

export default styles;
