import { Text } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import { Certificate } from 'src/api/resumes/types';

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
      {certificates.map((certificate, index) => {
        <PdfListItem
          title={certificate.name}
          key={index}
          titleStyle={styles.listTitle}
        >
          <Text>
            {t('receivedDate')} {certificate.receivedDate}
          </Text>
          {certificate.expirationDate && (
            <Text>{`${t('expirationDate')} ${certificate.expirationDate}`}</Text>
          )}
        </PdfListItem>;
      })}
    </>
  );
};

export default PdfCertificates;
