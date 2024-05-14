import { PhoneOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';

import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import { User } from 'src/api/users/types';

import CoverLetterForm from '../CoverLetterForm/CoverLetterForm';

type CoverLetterViewProps = {
  coverLetter?: GetCoverLetterResponse;
  isFetched: boolean;
  user?: User;
};

const CoverLetterView: React.FC<CoverLetterViewProps> = ({ coverLetter, isFetched, user }) => (
  <div className="cover-letter-container">
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
        {user?.phoneNumber ? (
          <p>
            <PhoneOutlined className="cover-letter-personal-info-icon" />
            {`${user?.phoneNumber}`}
          </p>
        ) : null}
      </div>
    </div>
    <div className="cover-letter-body">
      <div className="cover-letter-body-to-information">
        <p>{coverLetter?.to}</p>
        <p>{coverLetter?.company}</p>
        <p>{coverLetter?.companyAddress}</p>
      </div>
      <p className="cover-letter-content">{coverLetter?.content}</p>
      <CoverLetterForm
        coverLetter={coverLetter}
        isFetched={isFetched}
      />
    </div>
  </div>
);

export default CoverLetterView;
