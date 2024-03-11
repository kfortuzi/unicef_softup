import { Publication } from 'src/api/resumes/types';

type PublicationItemProps = Publication;

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
  const { name, releaseDate, link } = props;

  return (
    <div className="publication-item">
      <p className="publication-text">{name}</p>
      <p className="publication-text">&#8226;</p>
      <p className="publication-text">{releaseDate}</p>
      <p className="publication-text">{link}</p>
    </div>
  );
};

export default PublicationItem;
