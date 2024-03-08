import React from 'react';
import { useTranslation } from 'react-i18next';

import { GetResumeResponse } from 'src/api/resumes/types';

import resume from '../../../../api/resumes/getResumeResponse.json';
import AboutMeForm from '../AboutMeForm/AboutMeForm';
import AboutMeView from '../AboutMeView/AboutMeView';
import Certifications from '../CertificationsView/CertificationsView';
import ContactInfoView from '../ContactInfoView/ContactInfoView';
import DigitalSkillsForm from '../DigitalSkillsForm/DigitalSkillsForm';
import DrivingLicenseItem from '../DrivingLicenseItem/DrivingLicenseItem';
import EducationAndTrainingsForm from '../EducationAndTrainingsForm/EducationAndTrainingsForm';
import EducationAndTrainings from '../EducationAndTrainingsView/EducationAndTrainingsView';
import HobbiesForm from '../HobbiesForm/HobbiesForm';
import LanguagesForm from '../LanguageForm/LanguageForm';
import LanguageItem from '../LanguageItem/LanguageItem';
import PublicationItem from '../PublicationItem/PublicationItem';
import Section from '../Section/Section';
import SoftSkillsForm from '../SoftSkillsForm/SoftSkillsForm';
import TechnicalSkillsForm from '../TechnicalSkillsForm/TechnicalSkillsForm';
import VolunteeringItem from '../VolunteeringItem/VolunteeringItem';
import WorkExperiencesForm from '../WorkExperiencesForm/WorkExperiencesForm';
import WorkExperiencesView from '../WorkExperiencesView/WorkExperiencesView';

const MyResumeView: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });

  const { firstName, summary, email, profilePicture, linkedinUrl, location } = resume as GetResumeResponse;

  return (
    <div className="my-resume-layout">
      <div className="my-resume-container">
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
            <Section title="About Me">
              <AboutMeView description={summary} />
              <AboutMeForm />
            </Section>
            {/* Education And Training*/}
            <Section title="Education and Trainings">
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
            <Section title="Work Experiences">
              <WorkExperiencesView workExperiences={resume.experiences || []} />
              <WorkExperiencesForm workExperiences={resume.experiences || []} />
            </Section>
            {/* Languages*/}
            <Section title="Languages">
              <div className="section-text">
                <p className="section-subtitle">Mother Tongue(s): </p>
                {resume.languages
                  .filter((language) => language.isNative)
                  .map((language) => (
                    <p>{language.name}</p>
                  ))}
              </div>
              <div className="other-languages-container">
                <p className="section-subtitle">Other Language(s): </p>
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
            <Section title="Digital Skills">
              <p className="section-text">{resume.digitalSkills.join(', ')}</p>
              <DigitalSkillsForm digitalSkills={resume.digitalSkills} />
            </Section>
            {/* Soft Skills*/}
            <Section title="Soft Skills">
              <p className="section-text">{resume.softSkills.join(', ')}</p>
              <SoftSkillsForm softSkills={resume.softSkills} />
            </Section>
            {/* Technical Skills*/}
            <Section title="Technical Skills">
              <p className="section-text">{resume.technicalSkills.join(', ')}</p>
              <TechnicalSkillsForm technicalSkills={resume.technicalSkills} />
            </Section>
            {/* Hobbies and Interests*/}
            <Section title="Hobbies and Interests">
              <p className="section-text">{resume.hobbies.join(', ')}</p>
              <HobbiesForm hobbies={resume.hobbies} />
            </Section>
            {/* Certificates*/}
            <Section title="Certifications">
              <Certifications
                certifications={[
                  {
                    title: 'React js',
                    companyName: 'Kocaeli University',
                    startDate: '2021',
                    endDate: '2022',
                  },
                  {
                    title: 'React js',
                    companyName: 'Kocaeli University',
                    startDate: '2021',
                  },
                ]}
              />
            </Section>
            {/* Volunteering*/}
            <Section title="Volunteerings">
              <VolunteeringItem
                title="Volunteer"
                organization="Kocaeli University"
                startDate="2015"
                endDate="2016"
              />
            </Section>
            {/* Publications*/}
            <Section title="Publications">
              <PublicationItem
                name="React js Technical Article"
                date="2021"
              />
            </Section>
            <Section title="Driving Licenses">
              <DrivingLicenseItem drivingLicenses={[{ drivingLicense: 'B2' }, { drivingLicense: 'A1' }]} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResumeView;
