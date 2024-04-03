import dayjs from 'dayjs';

import { Education } from 'src/api/resumes/types';

import ListItem from '../ListItem/ListItem';

type EducationAndTraining = Education;

interface EducationAndTrainingsProps {
  educationAndTrainings?: EducationAndTraining[];
}

const EducationAndTrainings: React.FC<EducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;

  return (
    <>
      {educationAndTrainings?.map((education, index) => {
        <ListItem
          title={`
        ${dayjs(education.startDate).format('MMM YYYY')} 
        - ${dayjs(education.endDate).format('MMM YYYY')} 
        - ${education.title}
        `}
          key={index}
          titleStyle={{ color: 'blue' }}
        >
          <p className="education-subtitle">{education.type}</p>
          <p>{education.location}</p>
        </ListItem>;
      })}
    </>
  );
};

export default EducationAndTrainings;
