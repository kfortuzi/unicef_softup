interface DrivingLicenseViewProps {
  drivingLicense: string;
}

const DrivingLicenseView: React.FC<DrivingLicenseViewProps> = ({ drivingLicense }) => {
  return (
    <div
      className="driving-license-container"
    >
      <img
        src={'https://cdn-icons-png.flaticon.com/512/1023/1023397.png'}
        className="driving-license-image"
        alt="Driving License Icon"
      />
      <p className="driving-license-text">{drivingLicense}</p>
    </div>
  );
}

export default DrivingLicenseView;
