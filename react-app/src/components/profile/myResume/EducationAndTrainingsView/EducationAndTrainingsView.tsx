import ListItem from '../ListItem/ListItem';

type EducationAndTraining = {
  schoolName: string;
  fieldOfStudy?: string;
  degree?: string;
  grade?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  location?: string;
};

interface EducationAndTrainingsProps {
  educationAndTrainings: EducationAndTraining[];
}

const EducationAndTrainings: React.FC<EducationAndTrainingsProps> = (props) => {
  const { educationAndTrainings } = props;

  const experiences = educationAndTrainings.map((education, index) => {
    return (
      <ListItem
        title={`${education.startDate} - ${education.endDate} - ${education.location}`}
        key={index}
        titleStyle={{ color: 'blue' }}
      >
        <p className="education-subtitle">{`${education.degree} - ${education.fieldOfStudy}`}</p>
        <p>{education.schoolName}</p>
      </ListItem>
    );
  });

  return experiences;
};

export default EducationAndTrainings;
