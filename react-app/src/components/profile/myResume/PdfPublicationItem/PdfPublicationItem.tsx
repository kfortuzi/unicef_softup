import { Text, View } from '@react-pdf/renderer';

import { Publication } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfPublicationItemStyle';

type PdfPublicationItemProps = Publication;

const PdfPublicationItem: React.FC<PdfPublicationItemProps> = (props) => {
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)])
  );

  const { name, releaseDate, link } = omittedFalsyProps;

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
