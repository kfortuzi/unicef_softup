import { Text, View } from '@react-pdf/renderer';

import { Publication } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';

import styles from './PdfPublicationItemStyle';

type PdfPublicationItemProps = Publication;

const PdfPublicationItem: React.FC<PdfPublicationItemProps> = (props) => {
  const { name, releaseDate, link } = props;

  return (
    <View style={styles.publicationItem}>
      <Text style={styles.publicationText}>{name}</Text>
      <Text style={styles.publicationText}>&#8226;</Text>
      <Text style={styles.publicationText}>{formatDate(releaseDate)}</Text>
      {link ? (
        <>
          <Text style={styles.publicationText}>&#8226;</Text>
          <Text style={styles.publicationText}>{link}</Text>
        </>
      ) : null}
    </View>
  );
};

export default PdfPublicationItem;
