import { StyleSheet } from '@react-pdf/renderer';

const titleFontSize = 20;

const styles = StyleSheet.create({
  contactSection: {
    padding: 20,
    flex: 3,
    gap: 10,
    backgroundColor: '#f0f0f0',
  },
  profilePicSection: {
    alignItems: 'center',
    marginBottom: 50,
    gap: 10,
  },
  name: {
    fontWeight: 700,
    fontSize: titleFontSize,
  },
  icon: {
    width: 15,
    height: 15,
  },
  infoSection: {
    gap: 10,
  },
  infoGroup: {
    gap: 3,
  },
  groupTitle: {
    flexDirection: 'row',
    fontWeight: 600,
    fontSize: 15,
    gap: 5,
  },
  groupValue: {
    fontSize: 11,
    fontWeight: 'light',
  },
});

export default styles;
