interface DrivingLicense {
  drivingLicense: string;
}

interface DrivingLicenseItemProps {
  drivingLicenses: DrivingLicense[];
}

const DrivingLicenseItem: React.FC<DrivingLicenseItemProps> = ({ drivingLicenses }) => {
  const drivingLicenseItems = drivingLicenses.map((drivingLicense, index) => {
    return (
      <div
        className="driving-license-container"
        key={index}
      >
        <img
          src={'https://cdn-icons-png.flaticon.com/512/1023/1023397.png'}
          className="driving-license-image"
          alt="Driving License Icon"
        />
        <p className="driving-license-text">{drivingLicense.drivingLicense}</p>
      </div>
    );
  });

  return drivingLicenseItems;
};

export default DrivingLicenseItem;
