import { Text, View } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { Volunteering } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfVolunteeringItemStyle';

type PdfVolunteeringItemItemProps = Volunteering;

const PdfVolunteeringItem: React.FC<PdfVolunteeringItemItemProps> = (props) => {
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)]),
  );
  const { organization, role, startDate, endDate } = omittedFalsyProps;
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
          {formatDate(startDate)}
          {' - '}
          {formatDate(endDate, t('present'))}
        </Text>
      </View>
    </View>
  );
};

export default PdfVolunteeringItem;
