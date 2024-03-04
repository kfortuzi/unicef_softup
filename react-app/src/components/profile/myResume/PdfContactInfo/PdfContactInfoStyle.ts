import { StyleSheet } from '@react-pdf/renderer';

const titleFontSize = 20;

const styles = StyleSheet.create({
  profilePicSection: {
    alignItems: 'center',
    marginBottom: 50,
    gap: 10,
  },
  name: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: titleFontSize,
  },
  infoSection: {
    gap: 10,
  },
  infoGroup: {
    gap: 3,
  },
  groupTitle: {
    fontFamily: 'Roboto',
    fontWeight: 700,
    fontSize: 15,
  },
  groupValue: {
    fontSize: 14,
  },
  contactSection: {
    padding: 10,
    flex: 3,
    gap: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default styles;
