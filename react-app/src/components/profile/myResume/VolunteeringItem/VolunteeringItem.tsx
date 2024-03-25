import { Volunteering } from 'src/api/resumes/types';

type VolunteeringItemItemProps = Volunteering;

const VolunteeringItem: React.FC<VolunteeringItemItemProps> = (props) => {
  const { role, organization, startDate, endDate = 'present' } = props;

  return (
    <div className="volunteering-item">
      <div>
        <p className="volunteering-title">{role}</p>
        <p className="volunteering-organization">{organization}</p>
        <p className="volunteering-date">
          {startDate} - {endDate}
        </p>
      </div>
    </div>
  );
};

export default VolunteeringItem;
