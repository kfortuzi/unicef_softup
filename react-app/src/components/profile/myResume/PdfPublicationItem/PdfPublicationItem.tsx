import { Text, View } from '@react-pdf/renderer';

import { Publication } from 'src/api/resumes/types';

import styles from './PdfPublicationItemStyle';

type PdfPublicationItemProps = Publication;

const PdfPublicationItem: React.FC<PdfPublicationItemProps> = (props) => {
  const { name, releaseDate, link } = props;

  return (
    <View style={styles.publicationItem}>
      <Text style={styles.publicationText}>{name}</Text>
      <Text style={styles.publicationText}>&#8226;</Text>
      <Text style={styles.publicationText}>{releaseDate}</Text>
      <Text style={styles.publicationText}>&#8226;</Text>
      <Text style={styles.publicationText}>{link}</Text>
    </View>
  );
};

export default PdfPublicationItem;
