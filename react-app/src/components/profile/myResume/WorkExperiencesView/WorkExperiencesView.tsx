import ListItem from '../ListItem/ListItem';

interface WorkExperience {
  title: string;
  companyName: string;
  description?: string;
  location?: string;
  startDate: string;
  endDate?: string;
}

interface WorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const WorkExperiencesView: React.FC<WorkExperiencesProps> = (props) => {
  const { workExperiences } = props;

  const experiences = workExperiences.map((workExperience, index) => {
    return (
      <ListItem
        title={`${workExperience.startDate} - ${workExperience.endDate} - ${workExperience.location}`}
        key={index}
        titleStyle={{ color: 'blue' }}
      >
        <p className="work-experience-title">{workExperience.title}</p>
        <p>{workExperience.companyName}</p>
        <p>{workExperience.description}</p>
      </ListItem>
    );
  });

  return experiences;
};

export default WorkExperiencesView;
