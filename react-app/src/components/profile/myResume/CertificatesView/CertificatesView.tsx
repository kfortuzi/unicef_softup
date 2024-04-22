import { useTranslation } from 'react-i18next';

import { Certificate } from 'src/api/resumes/types';
import { formatDate, isValidDate } from 'src/utils/dateUtils';

import ListItem from '../ListItem/ListItem';

interface CertificatesProps {
  certificates: Certificate[];
}

const CertificatesView: React.FC<CertificatesProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.certificatesSection' });
  const { certificates } = props;

  return (
    <>
      {certificates?.map((certificate, index) => (
        <ListItem
          title={certificate.name}
          key={index}
          titleStyle={{ color: 'blue' }}
        >
          <p>{`${t('receivedDate')} - ${formatDate(certificate?.receivedDate)}`}</p>
          {isValidDate(certificate?.expirationDate)
            ? (<p>{`${t('expirationDate')} - ${formatDate(certificate?.expirationDate)}`}</p>)
            : null}
        </ListItem>
      ))}
    </>
  );
};

export default CertificatesView;
