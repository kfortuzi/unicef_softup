import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Certificate } from 'src/api/resumes/types';

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
          <p>
            {`${t('receivedDate')} - 
            ${certificate.receivedDate ? dayjs(certificate.receivedDate).format('MMM YYYY') : ''}
            `}
          </p>
          {certificate.expirationDate
            ? (<p>{`${t('expirationDate')} - 
              ${certificate.expirationDate ? dayjs(certificate.expirationDate).format('MMM YYYY') : ''}`}</p>)
            : null}
        </ListItem>
      ))}
    </>
  );
};

export default CertificatesView;
