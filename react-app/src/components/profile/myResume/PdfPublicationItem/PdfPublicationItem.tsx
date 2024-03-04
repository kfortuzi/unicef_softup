import { Text, View } from '@react-pdf/renderer';

import styles from './PdfPublicationItemStyle';

interface PdfPublicationItemProps {
  name: string;
  date: string;
}

const PdfPublicationItem: React.FC<PdfPublicationItemProps> = (props) => {
  const { name, date } = props;

  return (
    <View style={styles.publicationItem}>
      <Text style={styles.publicationText}>{name}</Text>
      <Text style={styles.publicationText}>&#8226;</Text>
      <Text style={styles.publicationText}>{date}</Text>
    </View>
  );
};

export default PdfPublicationItem;
