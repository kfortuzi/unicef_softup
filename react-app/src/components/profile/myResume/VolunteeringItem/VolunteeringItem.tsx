interface VolunteeringItemItemProps {
  organization?: string;
  title: string;
  imgUrl?: string;
  startDate: string;
  endDate?: string;
}

const VolunteeringItem: React.FC<VolunteeringItemItemProps> = (props) => {
  const { organization, title, imgUrl, startDate, endDate = 'present' } = props;

  return (
    <div className="volunteering-item">
      {imgUrl && (
        <img
          className="volunteering-item-image"
          src={imgUrl}
          alt="Volunteering Item Image"
        />
      )}

      <div>
        <p className="volunteering-title">{title}</p>
        <p className="volunteering-organization">{organization}</p>
        <p className="volunteering-date">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default VolunteeringItem;
