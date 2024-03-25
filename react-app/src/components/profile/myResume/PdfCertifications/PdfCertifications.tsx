import { Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { Certification } from 'src/api/resumes/types';

import PdfListItem from '../PdfListItem/PdfListItem';
import styles from './PdfCertificationsStyle';

interface PdfCertificationsProps {
  certifications: Certification[];
}

const PdfCertifications: React.FC<PdfCertificationsProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.certificationsSection' });
  const { certifications } = props;

  const experiences = certifications.map((certification, index) => {
    return (
      <PdfListItem
        title={certification.name}
        key={index}
        titleStyle={styles.listTitle}
      >
        <Text>
          {t('receivedDate')} {certification.receivedDate}
        </Text>
        {certification.expirationDate && (
          <Text>{`${t('expirationDate')} ${certification.expirationDate}`}</Text>
        )}
      </PdfListItem>
    );
  });

  return experiences;
};

export default PdfCertifications;
