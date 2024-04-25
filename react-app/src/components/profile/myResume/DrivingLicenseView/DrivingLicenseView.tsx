import { IdcardOutlined } from "@ant-design/icons";

import { omitFalsyValue } from "src/utils/stringUtils";

interface DrivingLicenseViewProps {
  drivingLicense: string;
}

const DrivingLicenseView: React.FC<DrivingLicenseViewProps> = ({ drivingLicense }) => {
  return drivingLicense
    ? (
      <div
        className="driving-license-container"
      >
        <IdcardOutlined className="driving-license-icon" />
        <p className="driving-license-text">{omitFalsyValue(drivingLicense)}</p>
      </div>
    ) : null;
}

export default DrivingLicenseView;
