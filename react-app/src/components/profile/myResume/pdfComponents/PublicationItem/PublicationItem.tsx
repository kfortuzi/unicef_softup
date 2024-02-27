import { Text, View } from '@react-pdf/renderer';

import styles from './PublicationItemStyle';

interface PublicationItemProps {
  name: string;
  date: string;
}

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
  const { name, date } = props;

  return (
    <View style={styles.publicationItem}>
      <Text style={styles.publicationText}>{name}</Text>
      <Text style={styles.publicationText}>&#8226;</Text>
      <Text style={styles.publicationText}>{date}</Text>
    </View>
  );
};

export default PublicationItem;
