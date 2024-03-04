import ListItem from '../ListItem/ListItem';

type Certification = {
  title: string;
  companyName: string;
  description?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
};

interface CertificationsProps {
  certifications: Certification[];
}

const CertificationsView: React.FC<CertificationsProps> = (props) => {
  const { certifications } = props;

  const experiences = certifications.map((certification, index) => {
    return (
      <ListItem
        title={certification.title}
        key={index}
        titleStyle={{ color: 'blue' }}
      >
        <p>{certification.companyName}</p>
        <p>{certification.description}</p>
        {certification.endDate && <p>{`Expires in ${certification.endDate}`}</p>}
      </ListItem>
    );
  });

  return experiences;
};

export default CertificationsView;
