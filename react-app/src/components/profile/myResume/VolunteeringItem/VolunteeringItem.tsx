import { useTranslation } from 'react-i18next';

import { Volunteering } from 'src/api/resumes/types';
import { formatDate } from 'src/utils/dateUtils';

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
          {formatDate(startDate)}
          {' - '}
          {formatDate(endDate, t('present'))}
        </p>
      </div>
    </div>
  );
};

export default VolunteeringItem;
