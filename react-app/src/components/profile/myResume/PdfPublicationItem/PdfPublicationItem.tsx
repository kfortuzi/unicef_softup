import { Text, View } from '@react-pdf/renderer';

import { Publication } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfPublicationItemStyle';

type PdfPublicationItemProps = Publication;

const PdfPublicationItem: React.FC<PdfPublicationItemProps> = (props) => {
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)]),
  );

  const { name, releaseDate, link } = omittedFalsyProps;

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <View>
        <Text style={styles.publicationName}>{name}</Text>
        <Text style={styles.publicationDate}>{formatDate(releaseDate)}</Text>
        {link ? <Text style={styles.publicationLink}>{link}</Text> : null}
      </View>
    </View>
  );
};

export default PdfPublicationItem;
