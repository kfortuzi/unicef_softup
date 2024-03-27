import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetJob from 'src/api/jobs/hooks/useGetJob';
import useGetJobs from 'src/api/jobs/hooks/useGetJobs';

const JobDetails: React.FC<JobDetailsProps> = () => {
  const { id } = useParams();
  const { t } = useTranslation('translation', { keyPrefix: 'jobs' });
  if (!id) {
    return <div>Job not found</div>;
  }

  // will implement this later
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { data: job, isLoading } = useGetJob({ id });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="job-details-container">
      <h2>ReactJS Developer</h2>
      <div className="job-main-details">
        <p>Company</p>
        <p>Address</p>
        <p>Type</p>
      </div>
      <div className="job-details">
        <div className="job-description">
          <h3>Job Description</h3>
          <p>Job Description</p>
        </div>
        <div className="job-requirements">
          <h3>Requirements</h3>
          <p>Requirements</p>
        </div>
        <div className="job-responsibilities">
          <h3>Responsibilities</h3>
          <p>Responsibilities</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
