import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import useGetJob from 'src/api/jobs/hooks/useGetJob';
import dateTimeFormats from 'src/constants/dateTimeFormats';

const JobDetails: React.FC = () => {
  const { id } = useParams();
  const { t } = useTranslation('translation', { keyPrefix: 'jobDetails' });
  const { data: job, isFetched } = useGetJob({ id });

  if (isFetched) {
    return (
      <div className="job-details-container">
        <h2>
          <strong>{t('title')}: </strong>
          {`${job?.title}`}
        </h2>
        <div className="job-main-details">
          <p>
            <span className="data-name">{t('company')}: </span>
            {`${job?.company}`}
          </p>
          <p>
            <span className="data-name">{t('location')}: </span>
            {job?.location}
          </p>
          <p>
            <span className="data-name">{t('address')}: </span>
            {job?.address}
          </p>
          <p>
            <span className="data-name">{t('vacantPositions')}: </span>
            {job?.vacantPositions}
          </p>
          <p>
            <span className="data-name">{t('dateStart')}: </span>
            {job?.dateStart && dayjs(job?.dateStart).format(dateTimeFormats.albanianDate)}
          </p>
          <p>
            <span className="data-name">{t('dateEnd')}: </span>
            {job?.dateEnd && dayjs(job?.dateEnd).format(dateTimeFormats.albanianDate)}
          </p>
        </div>
        <div className="job-details">
          <div className="job-description">
            <h3>{t('description')}</h3>
            <p>{job?.description}</p>
          </div>
          <div className="job-skillLines">
            <h3>{t('skillLines')}</h3>
            <p>{job?.skillLines}</p>
          </div>
          <div className="job-experience">
            <h3>{t('experience')}</h3>
            <p>{job?.experience}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default JobDetails;
