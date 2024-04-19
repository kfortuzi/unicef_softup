import { Text, View } from '@react-pdf/renderer';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Volunteering } from 'src/api/resumes/types';

import styles from './PdfVolunteeringItemStyle';

type PdfVolunteeringItemItemProps = Volunteering;

const PdfVolunteeringItem: React.FC<PdfVolunteeringItemItemProps> = (props) => {
  const { organization, role, startDate, endDate } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 10,
      }}
    >
      <View>
        <Text style={styles.volunteeringTitle}>{role}</Text>
        <Text style={styles.volunteeringOrganization}>{organization}</Text>
        <Text style={styles.volunteeringDate}>
          {startDate ? dayjs(startDate).format('MMM YYYY') : ''}
          {' - '}
          {endDate ? dayjs(endDate).format('MMM YYYY') : t('present')}
        </Text>
      </View>
    </View>
  );
};

export default PdfVolunteeringItem;
