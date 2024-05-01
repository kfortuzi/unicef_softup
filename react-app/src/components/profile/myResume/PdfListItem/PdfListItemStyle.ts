import { StyleSheet } from '@react-pdf/renderer';

const medium = 12; 
const large = 14;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    fontSize: medium,
    margin:0,
  },
  listDecoration: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '10px',
  },
  listContent: {
    flexDirection: 'column',
    paddingBottom: 10,
  },
  listItemTitle: {
    flexWrap: 'wrap',
    textOverflow: 'ellipsis',
    fontWeight: 'bold',
    marginTop: '-3px',
    minHeight: 20,
    fontSize: large,
  },
  listBody: {
    flexDirection: 'row',
    gap: 10,
  },
  listBullet: {
    minHeight: 8,
    minWidth: 8,
    margin: 0,
    borderRadius: '50%',
    border: '2 solid blue',
  },
  listLine: {
    flex: 1,
    minWidth: 4,
    borderRadius: 4,
    margin: 0,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
  
});

export default styles;
