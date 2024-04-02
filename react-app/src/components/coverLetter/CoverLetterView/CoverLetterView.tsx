import { PhoneOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';

import useGetCoverLetter from 'src/api/coverLetters/hooks/useGetCoverLetter';
import { GetCoverLetterRequest } from 'src/api/coverLetters/types';
import useGetProfile from 'src/api/users/hooks/useGetProfile';
import LoadingFullPage from 'src/components/common/LoadingFullPage/LoadingFullPage';

import CoverLetterForm from '../CoverLetterForm/CoverLetterForm';

const CoverLetterView: React.FC = () => {
  const { id } = useParams() as GetCoverLetterRequest;
  const { data: coverLetter, isFetching } = useGetCoverLetter({ id });
  const { data: user } = useGetProfile();

  if (isFetching) {
    return <LoadingFullPage />;
  }

  return (
    <div className="cover-letter-layout">
      <div className="slide-container">
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
          <p>{coverLetter?.content}</p>
          <CoverLetterForm />
        </div>
      </div>
    </div>
  );
};

export default CoverLetterView;
