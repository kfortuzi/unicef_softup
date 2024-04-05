import React from 'react';
import { useTranslation } from 'react-i18next';

import { GetResumeResponse } from 'src/api/resumes/types';

import AboutMeForm from '../AboutMeForm/AboutMeForm';
import AboutMeView from '../AboutMeView/AboutMeView';
import CertificatesForm from '../CertificatesForm/CertificatesForm';
import CertificatesView from '../CertificatesView/CertificatesView';
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';
import ContactInfoView from '../ContactInfoView/ContactInfoView';
import DigitalSkillsForm from '../DigitalSkillsForm/DigitalSkillsForm';
import DrivingLicenceForm from '../DrivingLicenceForm/DrivingLicenceForm';
import DrivingLicenceView from '../DrivingLicenceView/DrivingLicenceView';
import EducationAndTrainingsForm from '../EducationAndTrainingsForm/EducationAndTrainingsForm';
import EducationAndTrainings from '../EducationAndTrainingsView/EducationAndTrainingsView';
import HobbiesForm from '../HobbiesForm/HobbiesForm';
import LanguagesForm from '../LanguageForm/LanguageForm';
import LanguageItem from '../LanguageItem/LanguageItem';
import PublicationsForm from '../PublicationForm/PublicationForm';
import PublicationItem from '../PublicationItem/PublicationItem';
import Section from '../Section/Section';
import SoftSkillsForm from '../SoftSkillsForm/SoftSkillsForm';
import VolunteeringForm from '../VolunteeringForm/VolunteeringForm';
import VolunteeringItem from '../VolunteeringItem/VolunteeringItem';
import WorkExperiencesForm from '../WorkExperiencesForm/WorkExperiencesForm';
import WorkExperiencesView from '../WorkExperiencesView/WorkExperiencesView';

type MyResumeViewProps = {
  resume: GetResumeResponse;
};

const MyResumeView: React.FC<MyResumeViewProps> = ({ resume }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  const { firstName, email, linkedinUrl, location, profilePicture, summary, phoneNumber, lastName } = resume;

  return (
    <div className="my-resume-layout">
      <div className="slide-container">
        <h1>{t('header')}</h1>
        <div className="my-resume-body">
          <div className="contact-section">
            <ContactInfoView
              profilePicture={profilePicture || 'https://i.imgur.com/6b6b2b0.png'}
              name={firstName}
              surname={lastName}
              email={email}
              linkedinUrl={linkedinUrl}
              linkedinText="linkedin"
              address={location}
              phoneNumber={phoneNumber}
            />
            <ContactInfoForm
              profilePicture={profilePicture || 'https://i.imgur.com/6b6b2b0.png'}
              name={firstName}
              lastName={lastName}
              email={email}
              linkedinUrl={linkedinUrl}
              address={location}
              phoneNumber={phoneNumber}
            />
          </div>
          <div className="content-section">
            <Section title={t('aboutMeSection.header')}>
              <AboutMeView description={summary} />
              <AboutMeForm
                aboutMe={summary}
                workExperiences={resume?.experiences}
              />
            </Section>
            {/* Education And Training*/}
            <Section title={t('educationAndTrainingsSection.headerPlural')}>
              <EducationAndTrainings educationAndTrainings={resume.educations} />
              <EducationAndTrainingsForm educationAndTrainings={resume.educations} />
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
                {resume?.languages
                  ?.filter((language) => language.isNative)
                  .map((language) => <p>{language.name}</p>)}
              </div>
              <div className="other-languages-container">
                <p className="section-subtitle">{t('languagesSection.otherLanguages')} </p>
                {resume?.languages
                  ?.filter((language) => !language.isNative)
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
              <LanguagesForm languages={resume?.languages} />
            </Section>
            {/* Digital Skills*/}
            <Section title={t('digitalSkillsSection.headerPlural')}>
              <p className="section-text">{resume?.digitalSkills?.replace(',', ', ')}</p>
              <DigitalSkillsForm digitalSkills={resume?.digitalSkills?.split(',') || []} />
            </Section>
            {/* Soft Skills*/}
            <Section title={t('softSkillsSection.headerPlural')}>
              <p className="section-text">{resume?.softSkills?.replace(',', ', ')}</p>
              <SoftSkillsForm softSkills={resume?.softSkills?.split(',') || []} />
            </Section>
            {/* Hobbies and Interests*/}
            <Section title={t('hobbiesSection.headerPlural')}>
              <p className="section-text">{resume?.hobbies?.replace(',', ', ')}</p>
              <HobbiesForm hobbies={resume?.hobbies?.split(',')} />
            </Section>
            {/* Certificates*/}
            <Section title={t('certificatesSection.headerPlural')}>
              <CertificatesView certificates={resume?.certificates || []} />
              <CertificatesForm certificates={resume?.certificates || []} />
            </Section>
            {/* Volunteering*/}
            <Section title={t('volunteeringsSection.headerPlural')}>
              {resume?.volunteering?.map((volunteering, index) => (
                <VolunteeringItem
                  key={index}
                  role={volunteering.role}
                  organization={volunteering.organization}
                  startDate={volunteering.startDate}
                  endDate={volunteering.endDate}
                />
              ))}
              <VolunteeringForm volunteering={resume?.volunteering || []} />
            </Section>
            {/* Publications*/}
            <Section title={t('publicationsSection.headerPlural')}>
              {resume?.publications?.map((publication, index) => (
                <PublicationItem
                  key={index}
                  name={publication.name}
                  releaseDate={publication.releaseDate}
                  link={publication.link}
                />
              ))}
              <PublicationsForm publications={resume?.publications || []} />
            </Section>
            <Section title={t('drivingLicencesSection.headerPlural')}>
              <DrivingLicenceView drivingLicences={resume?.drivingLicense?.split(',') || []} />
              <DrivingLicenceForm drivingLicences={resume?.drivingLicense?.split(',') || []} />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResumeView;
