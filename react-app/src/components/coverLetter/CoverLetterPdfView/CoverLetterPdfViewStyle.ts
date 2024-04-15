import { StyleSheet } from "@react-pdf/renderer";

const primaryColor = '#e53f25';
const small = 8;
const medium = 16;
const large = 24;

const styles = StyleSheet.create({
  coverLetterLayout: {
    display: 'flex',
    flexDirection: 'column',
    gap: small,
    margin: large,
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
  },
});

export default styles;