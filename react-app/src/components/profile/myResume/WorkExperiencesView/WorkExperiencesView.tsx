import dayjs from 'dayjs';

import { WorkExperience } from 'src/api/resumes/types';

import ListItem from '../ListItem/ListItem';

interface WorkExperiencesProps {
  workExperiences: WorkExperience[];
}

const WorkExperiencesView: React.FC<WorkExperiencesProps> = (props) => {
  const { workExperiences } = props;

  return (
    <>
      {workExperiences.map((workExperience, index) => {
        return (
          <ListItem
            title={`${dayjs(workExperience.startDate).format('MMM YYYY')} 
            - ${dayjs(workExperience.endDate).format('MMM YYYY')}`}
            key={index}
            titleStyle={{ color: 'blue' }}
          >
            <p className="work-experience-title">{workExperience.position}</p>
            <p>{workExperience.company}</p>
            <p>{workExperience.responsibilities}</p>
          </ListItem>
        );
      })}
    </>
  );
};

export default WorkExperiencesView;
