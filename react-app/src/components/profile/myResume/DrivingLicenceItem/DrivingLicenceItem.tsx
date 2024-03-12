import { DrivingLicence } from '../../../../api/resumes/types';

interface DrivingLicenceItemProps {
  drivingLicences: DrivingLicence[];
}

const DrivingLicenceItem: React.FC<DrivingLicenceItemProps> = ({ drivingLicences }) => {
  const drivingLicenceItems = drivingLicences.map((drivingLicence, index) => {
    return (
      <div
        className="driving-licence-container"
        key={index}
      >
        <img
          src={'https://cdn-icons-png.flaticon.com/512/1023/1023397.png'}
          className="driving-licence-image"
          alt="Driving License Icon"
        />
        <p className="driving-licence-text">{drivingLicence.level}</p>
      </div>
    );
  });

  return drivingLicenceItems;
};

export default DrivingLicenceItem;
