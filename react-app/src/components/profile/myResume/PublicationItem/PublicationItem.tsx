import { Publication } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';

type PublicationItemProps = Publication;

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
  const { name, releaseDate, link } = props;

  return (
    <div className="publication-item">
      <p className="publication-name">{name}</p>
      <p className="publication-date">{formatDate(releaseDate)}</p>
      {link ? (
        <p className="publication-link">
          <a href={link}>{link}</a>
        </p>
      ) : null}
    </div>
  );
};

export default PublicationItem;
