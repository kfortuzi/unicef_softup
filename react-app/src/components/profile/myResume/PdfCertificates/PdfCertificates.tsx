import { Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { Certificate } from 'src/api/resumes/types';
import { formatDate, isValidDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import PdfListItem from '../PdfListItem/PdfListItem';
import styles from './PdfCertificatesStyle';

interface PdfCertificatesProps {
  certificates: Certificate[];
}

const PdfCertificates: React.FC<PdfCertificatesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.certificatesSection' });
  const { certificates } = props;

  return (
    <>
      {certificates?.map((certificate, index) => (
        <PdfListItem
          title={omitFalsyValue(certificate.name)}
          key={index}
          titleStyle={styles.listTitle}
        >
          <Text>{isValidDate(certificate?.receivedDate)
            ? `${t('receivedDate')} - ${formatDate(certificate?.receivedDate)}\n`
            : null}
          </Text>
          <Text>
            {isValidDate(certificate?.expirationDate)
              ? `${t('expirationDate')} - ${formatDate(certificate?.expirationDate)}`
              : null}
          </Text>
        </PdfListItem>
      ))}
    </>
  );
};

export default PdfCertificates;
