import React from 'react';
import { useTranslation } from 'react-i18next';

import { GetResumeResponse } from 'src/api/resumes/types';

import resume from '../../../../api/resumes/getResumeResponse.json';
import AboutMeForm from '../AboutMeForm/AboutMeForm';
import AboutMeView from '../AboutMeView/AboutMeView';
import CertificationsForm from '../CertificationsForm/CertificationsForm';
import Certifications from '../CertificationsView/CertificationsView';
import ContactInfoView from '../ContactInfoView/ContactInfoView';
import DigitalSkillsForm from '../DigitalSkillsForm/DigitalSkillsForm';
import DrivingLicenceForm from '../DrivingLicenceForm/DrivingLicenceForm';
import DrivingLicenceItem from '../DrivingLicenceItem/DrivingLicenceItem';
import EducationAndTrainingsForm from '../EducationAndTrainingsForm/EducationAndTrainingsForm';
import EducationAndTrainings from '../EducationAndTrainingsView/EducationAndTrainingsView';
import HobbiesForm from '../HobbiesForm/HobbiesForm';
import LanguagesForm from '../LanguageForm/LanguageForm';
import LanguageItem from '../LanguageItem/LanguageItem';
import PublicationsForm from '../PublicationForm/PublicationForm';
import PublicationItem from '../PublicationItem/PublicationItem';
import Section from '../Section/Section';
import SoftSkillsForm from '../SoftSkillsForm/SoftSkillsForm';
import TechnicalSkillsForm from '../TechnicalSkillsForm/TechnicalSkillsForm';
import VolunteeringForm from '../VolunteeringForm/VolunteeringForm';
import VolunteeringItem from '../VolunteeringItem/VolunteeringItem';
import WorkExperiencesForm from '../WorkExperiencesForm/WorkExperiencesForm';
import WorkExperiencesView from '../WorkExperiencesView/WorkExperiencesView';

const MyResumeView: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  const { firstName, summary, email, profilePicture, linkedinUrl, location } = resume as GetResumeResponse;

  return (
    <div className="my-resume-layout">
      <div className="slide-container">
        <h1>{t('header')}</h1>
        <div className="my-resume-body">
          <ContactInfoView
            profilePicture={profilePicture}
            name={firstName}
            email={email}
            linkedinUrl={linkedinUrl}
            linkedinText="emrekas"
            address={location}
          />
          <div className="content-section">
            <Section title={t('aboutMeSection.header')}>
              <AboutMeView description={summary} />
              <AboutMeForm />
            </Section>
            {/* Education And Training*/}
            <Section title={t('educationAndTrainingsSection.headerPlural')}>
              <EducationAndTrainings
                educationAndTrainings={[
                  {
                    title: 'Computer Engineering',
                    startDate: '2018',
                    endDate: '2022',
                    location: 'Kocaeli, Turkey',
                    type: 'Bachelor',
                  },
                  {
                    title: 'Computer Engineering',
                    startDate: '2018',
                    endDate: '2022',
                    location: 'Kocaeli, Turkey',
                    type: 'Bachelor',
                  },
                ]}
              />
              <EducationAndTrainingsForm
                educationAndTrainings={[
                  {
                    title: 'Computer Engineering',
                    startDate: '2018',
                    endDate: '2022',
                    location: 'Kocaeli, Turkey',
                    type: 'Bachelor',
                  },
                  {
                    title: 'Computer Engineering',
                    startDate: '2018',
                    endDate: '2022',
                    location: 'Kocaeli, Turkey',
                    type: 'Bachelor',
                  },
                ]}
              />
            </Section>
            {/* Work Experience*/}
            <Section title={t('workExperiencesSection.headerPlural')}>
              <WorkExperiencesView workExperiences={resume.experiences || []} />
              <WorkExperiencesForm workExperiences={resume.experiences || []} />
            </Section>
            {/* Languages*/}
            <Section title={t('languagesSection.headerPlural')}>
              <div className="section-text">
                <p className="section-subtitle">{t('languagesSection.motherTongue')} </p>
                {resume.languages
                  .filter((language) => language.isNative)
                  .map((language) => (
                    <p>{language.name}</p>
                  ))}
              </div>
              <div className="other-languages-container">
                <p className="section-subtitle">{t('languagesSection.otherLanguages')} </p>
                {resume.languages
                  .filter((language) => !language.isNative)
                  .map((language) => (
                    <LanguageItem
                      key={language.name}
                      name={language.name}
                      reading={language.reading}
                      writing={language.writing}
                      speaking={language.speaking}
                      isNative={language.isNative}
                    />
                  ))}
              </div>
              <LanguagesForm languages={resume.languages} />
            </Section>
            {/* Digital Skills*/}
            <Section title={t('digitalSkillsSection.headerPlural')}>
              <p className="section-text">{resume.digitalSkills.join(', ')}</p>
              <DigitalSkillsForm digitalSkills={resume.digitalSkills} />
            </Section>
            {/* Soft Skills*/}
            <Section title={t('softSkillsSection.headerPlural')}>
              <p className="section-text">{resume.softSkills.join(', ')}</p>
              <SoftSkillsForm softSkills={resume.softSkills} />
            </Section>
            {/* Technical Skills*/}
            <Section title={t('technicalSkillsSection.headerPlural')}>
              <p className="section-text">{resume.technicalSkills.join(', ')}</p>
              <TechnicalSkillsForm technicalSkills={resume.technicalSkills} />
            </Section>
            {/* Hobbies and Interests*/}
            <Section title={t('hobbiesSection.headerPlural')}>
              <p className="section-text">{resume.hobbies.join(', ')}</p>
              <HobbiesForm hobbies={resume.hobbies} />
            </Section>
            {/* Certificates*/}
            <Section title={t('certificationsSection.headerPlural')}>
              <Certifications certifications={resume.certifications || []} />
              <CertificationsForm certifications={resume.certifications || []} />
            </Section>
            {/* Volunteering*/}
            <Section title={t('volunteeringsSection.headerPlural')}>
              <VolunteeringItem
                role="Volunteer"
                organization="Kocaeli University"
                startDate="2015"
                endDate="2016"
              />
              <VolunteeringForm volunteering={resume.volunteering || []} />
            </Section>
            {/* Publications*/}
            <Section title={t('publicationsSection.headerPlural')}>
              {resume.publications?.map((publication, index) => (
                <PublicationItem
                  key={index}
                  name={publication.name}
                  releaseDate={publication.releaseDate}
                  link={publication.link}
                />
              ))}
              <PublicationsForm publications={resume.publications || []} />
            </Section>
            <Section title={t('drivingLicencesSection.headerPlural')}>
              <DrivingLicenceItem drivingLicences={resume.drivingLicences || []} />
              <DrivingLicenceForm drivingLicences={resume.drivingLicences || []} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResumeView;
