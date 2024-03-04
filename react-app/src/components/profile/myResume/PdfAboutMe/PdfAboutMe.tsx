import { Text } from '@react-pdf/renderer';

import styles from './PdfAboutMeStyle';

interface PdfAboutMeProps {
  description?: string;
}

const PdfAboutMe: React.FC<PdfAboutMeProps> = (props) => {
  const { description } = props;

  return <Text style={styles.description}>{description}</Text>;
};

export default PdfAboutMe;
