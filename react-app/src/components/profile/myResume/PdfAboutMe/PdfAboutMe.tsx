import { Text } from '@react-pdf/renderer';

import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfAboutMeStyle';

interface PdfAboutMeProps {
  description?: string;
}

const PdfAboutMe: React.FC<PdfAboutMeProps> = (props) => {
  const { description } = props;

  return <Text style={styles.description}>{omitFalsyValue(description)}</Text>;
};

export default PdfAboutMe;
