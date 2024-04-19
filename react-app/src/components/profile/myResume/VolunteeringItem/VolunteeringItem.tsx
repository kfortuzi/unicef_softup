import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

import { Volunteering } from 'src/api/resumes/types';

type VolunteeringItemItemProps = Volunteering;

const VolunteeringItem: React.FC<VolunteeringItemItemProps> = (props) => {
  const { role, organization, startDate, endDate } = props;
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <div className="volunteering-item">
      <div>
        <p className="volunteering-title">{role}</p>
        <p className="volunteering-organization">{organization}</p>
        <p className="volunteering-date">
          {startDate ? dayjs(startDate).format('MMM YYYY') : ''}
          {' - '}
          {endDate ? dayjs(endDate).format('MMM YYYY') : t('present')}
        </p>
      </div>
    </div>
  );
};

export default VolunteeringItem;
