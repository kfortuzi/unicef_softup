import { Publication } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';

type PublicationItemProps = Publication;

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
  const { name, releaseDate, link } = props;

  return (
    <div className="publication-item">
      <p className="publication-text">{name}</p>
      <p className="publication-text">&#8226;</p>
      <p className="publication-text">{formatDate(releaseDate)}</p>
      {link ? (
        <>
          <p className="publication-text">&#8226;</p>
          <a
            href={link}
            className="publication-text"
          >
            {link}
          </a>
        </>
      ) : null}
    </div>
  );
};

export default PublicationItem;
