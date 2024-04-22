import { PhoneOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import { User } from 'src/api/users/types';

import CoverLetterForm from '../CoverLetterForm/CoverLetterForm';

type CoverLetterViewProps = {
  coverLetter: GetCoverLetterResponse;
  user: User;
};

const CoverLetterView: React.FC<CoverLetterViewProps> = ({ coverLetter, user }) => {

  return (
    <div>
      <div className="cover-letter-personal-info">
        <div className="cover-letter-personal-info-title">
          <h2>{`${user?.firstName} ${user?.lastName}`}</h2>
        </div>
        <div className="cover-letter-personal-info-content">
          <p>
            <UserOutlined className="cover-letter-personal-info-icon" />
            {`${user?.firstName} ${user?.lastName}`}
          </p>
          <p>
            <MailOutlined className="cover-letter-personal-info-icon" />
            {`${user?.email}`}
          </p>
          <p>
            <PhoneOutlined className="cover-letter-personal-info-icon" />
            {`${user?.phoneNumber || 'N/A'}`}
          </p>
        </div>
      </div>
      <div className="cover-letter-body">
        <div className="cover-letter-body-to-information">
          <p>{coverLetter?.to}</p>
          <p>{coverLetter?.company}</p>
          <p>{coverLetter?.companyAddress}</p>
        </div>
        <p className='cover-letter-content'>{coverLetter?.content}</p>
        <CoverLetterForm />
      </div>
    </div>
  );
};

export default CoverLetterView;
