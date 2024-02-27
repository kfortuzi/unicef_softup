import { Text, View, Image } from '@react-pdf/renderer';

import styles from './VolunteeringItemStyle';

interface VolunteeringItemItemProps {
  organization?: string;
  title: string;
  imgUrl?: string;
  startDate: string;
  endDate?: string;
}

const VolunteeringItem: React.FC<VolunteeringItemItemProps> = (props) => {
  const { organization, title, imgUrl, startDate, endDate = 'present' } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
      }}
    >
      {imgUrl && (
        <Image
          style={{ width: '20%' }}
          src={imgUrl}
        />
      )}

      <View>
        <Text style={styles.volunteeringTitle}>{title}</Text>
        <Text style={styles.volunteeringOrganization}>{organization}</Text>
        <Text style={styles.volunteeringDate}>
          {startDate} - {endDate}
        </Text>
      </View>
    </View>
  );
};

export default VolunteeringItem;
