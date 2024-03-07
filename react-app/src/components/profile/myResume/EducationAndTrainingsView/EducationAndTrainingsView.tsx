import { Education } from 'src/api/resumes/types';

import ListItem from '../ListItem/ListItem';

type EducationAndTraining = Education;

interface EducationAndTrainingsProps {
  educationAndTrainings: EducationAndTraining[];
}

const EducationAndTrainings: React.FC<EducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;

  const experiences = educationAndTrainings.map((education, index) => {
    return (
      <ListItem
        title={`${education.startDate} - ${education.endDate} - ${education.title}`}
        key={index}
        titleStyle={{ color: 'blue' }}
      >
        <p className="education-subtitle">{education.type}</p>
        <p>{education.location}</p>
      </ListItem>
    );
  });

  return experiences;
};

export default EducationAndTrainings;
