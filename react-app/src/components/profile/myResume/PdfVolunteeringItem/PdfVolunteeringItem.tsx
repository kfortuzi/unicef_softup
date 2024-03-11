import { Text, View, Image } from '@react-pdf/renderer';

import { Volunteering } from 'src/api/resumes/types';

import styles from './PdfVolunteeringItemStyle';

type PdfVolunteeringItemItemProps = Volunteering;

const PdfVolunteeringItem: React.FC<PdfVolunteeringItemItemProps> = (props) => {
  const { organization, role, icon, startDate, endDate = 'present' } = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
      }}
    >
      {icon && (
        <Image
          style={{ width: '20%' }}
          src={icon}
        />
      )}

      <View>
        <Text style={styles.volunteeringTitle}>{role}</Text>
        <Text style={styles.volunteeringOrganization}>{organization}</Text>
        <Text style={styles.volunteeringDate}>
          {startDate} - {endDate}
        </Text>
      </View>
    </View>
  );
};

export default PdfVolunteeringItem;
