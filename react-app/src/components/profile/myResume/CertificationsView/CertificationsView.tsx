import { Certification } from 'src/api/resumes/types';

import ListItem from '../ListItem/ListItem';

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationsView: React.FC<CertificationsProps> = (props) => {
  const { certifications } = props;

  const experiences = certifications.map((certification, index) => {
    return (
      <ListItem
        title={certification.name}
        key={index}
        titleStyle={{ color: 'blue' }}
      >
        <p>Recieved Date: {certification.receivedDate}</p>
        {certification.expirationDate && <p>{`Expires in ${certification.expirationDate}`}</p>}
      </ListItem>
    );
  });

  return experiences;
};

export default CertificationsView;
