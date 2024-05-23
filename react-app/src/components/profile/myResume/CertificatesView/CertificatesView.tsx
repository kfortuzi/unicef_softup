import { useTranslation } from 'react-i18next';

import { Certificate } from 'src/api/resumes/types';
import { formatDate, isValidDate } from 'src/utils/dateUtils';
import { omitFalsyValue } from 'src/utils/stringUtils';

import ListItem from '../ListItem/ListItem';

interface CertificatesProps {
  certificates: Certificate[];
}

const CertificatesView: React.FC<CertificatesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.certificatesSection' });
  const { certificates } = props;

  return (
    <div>
      {certificates?.map((certificate, index) => (
        <ListItem
          title={omitFalsyValue(certificate.name)}
          key={index}
          titleStyle={{ color: 'blue' }}
        >
          {isValidDate(certificate?.receivedDate)
            ? `${t('receivedDate')} - ${formatDate(certificate?.receivedDate)}\n`
            : null}
          {isValidDate(certificate?.expirationDate)
            ? `${t('expirationDate')} - ${formatDate(certificate?.expirationDate)}`
            : null}
        </ListItem>
      ))}
    </div>
  );
};

export default CertificatesView;
