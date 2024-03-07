import { WorkExperience } from 'src/api/resumes/types';

import ListItem from '../ListItem/ListItem';

interface WorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const WorkExperiencesView: React.FC<WorkExperiencesProps> = (props) => {
  const { workExperiences } = props;

  const experiences = workExperiences.map((workExperience, index) => {
    return (
      <ListItem
        title={`${workExperience.startDate} - ${workExperience.endDate}`}
        key={index}
        titleStyle={{ color: 'blue' }}
      >
        <p className="work-experience-title">{workExperience.position}</p>
        <p>{workExperience.company}</p>
        <p>{workExperience.responsibilities}</p>
      </ListItem>
    );
  });

  return experiences;
};

export default WorkExperiencesView;
