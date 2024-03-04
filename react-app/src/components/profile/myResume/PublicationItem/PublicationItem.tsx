interface PublicationItemProps {
  name: string;
  date: string;
}

const PublicationItem: React.FC<PublicationItemProps> = (props) => {
  const { name, date } = props;

  return (
    <div className="publication-item">
      <p className="publication-text">{name}</p>
      <p className="publication-text">&#8226;</p>
      <p className="publication-text">{date}</p>
    </div>
  );
};

export default PublicationItem;
