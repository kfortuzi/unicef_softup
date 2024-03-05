import dayjs from 'dayjs';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { GetResumeResponse } from 'src/api/resumes/types';
import dateTimeFormats from 'src/constants/dateTimeFormats';

import AboutMeForm from '../AboutMeForm/AboutMeForm';
import AboutMeView from '../AboutMeView/AboutMeView';
import Certifications from '../CertificationsView/CertificationsView';
import ContactInfoView from '../ContactInfoView/ContactInfoView';
import DrivingLicenseItem from '../DrivingLicenseItem/DrivingLicenseItem';
import EducationAndTrainings from '../EducationAndTrainingsView/EducationAndTrainingsView';
import LanguageItem from '../LanguageItem/LanguageItem';
import PublicationItem from '../PublicationItem/PublicationItem';
import Section from '../Section/Section';
import VolunteeringItem from '../VolunteeringItem/VolunteeringItem';
import WorkExperiencesView from '../WorkExperiencesView/WorkExperiencesView';

const MyResumeView: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.personalInfo' });
  const resume = {
    firstName: 'John',
    lastName: 'Doe',
    digitalSkills: 'Digital Skills',
    softSkills: 'Soft Skills',
    summary: 'Summary',
    educations: [
      {
        school: 'School',
        degree: 'Degree',
        fieldOfStudy: 'Field of Study',
        startDate: '2020',
        endDate: '2021',
        description: 'Description',
        location: 'Location',
      },
    ],
    experiences: [
      {
        title: 'Software Developer',
        companyName: 'Kocaeli University',
        startDate: '2018',
        endDate: '2021',
        location: 'Kocaeli, Turkey',
        description: `Developed web applications using React.js and Node.js`,
      },
      {
        title: 'Software Developer',
        companyName: 'Kocaeli University',
        startDate: '2018',
        endDate: '2021',
        location: 'Kocaeli, Turkey',
        description: 'Developed e-commerce web applications using golang',
      },
    ],
    drivingLicense: 'Driving License',
    email: 'yunuskas55@gmail.com',
    volunteerings: [
      {
        title: 'Title',
        organization: 'Organization',
        imgUrl: 'Img Url',
        startDate: '2020',
        endDate: '2021',
      },
    ],
    languages: [
      {
        name: 'English',
        readingLevel: 'C2',
        writingLevel: 'B2',
        speakingLevel: 'A2',
      },
    ],
    certificates: [
      {
        name: 'Name',
        organization: 'Organization',
        date: dayjs().format(dateTimeFormats.albanianDate),
      },
    ],
    hobbies: 'Hobbies',
    publications: [
      {
        name: 'Name',
        date: dayjs().format(dateTimeFormats.albanianDate),
      },
    ],
    profilePicture:
      'https://static.vecteezy.com/system/resources/previews/034/601/899/large_2x/portrait-of-a-cat-wearing-sunglasses-on-the-sunset-background-ai-generated-free-photo.jpg',
    phoneNumber: 'Phone Number',
    linkedinUrl: 'Linkedin Url',
  } as GetResumeResponse;

  const {
    firstName,
    lastName,
    digitalSkills,
    softSkills,
    summary,
    educations,
    experiences,
    drivingLicense,
    email,
    volunteerings,
    languages,
    certificates,
    hobbies,
    publications,
    profilePicture,
    phoneNumber,
    linkedinUrl,
    nationality,
    location,
  } = resume as GetResumeResponse;

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
                    schoolName: 'Kocaeli University',
                    fieldOfStudy: 'Computer Engineering',
                    degree: 'Bachelor',
                    startDate: '2015',
                    endDate: '2019',
                    location: 'Kocaeli, Turkey',
                    description: 'GPA: 3.0',
                  },
                  {
                    schoolName: 'Kocaeli University',
                    fieldOfStudy: 'Computer Engineering',
                    degree: 'Bachelor',
                    startDate: '2015',
                    endDate: '2019',
                    location: 'Kocaeli, Turkey',
                    description: 'GPA: 3.0',
                  },
                ]}
              />
            </Section>
            {/* Work Experience*/}
            <Section title="Work Experiences">
              <WorkExperiencesView workExperiences={resume.experiences || []} />
            </Section>
            {/* Languages*/}
            <Section title="Languages">
              <div className="section-text">
                <p className="section-subtitle">Mother Tongue(s): </p>
                <p>Turkish</p>
              </div>
              <div className="other-languages-container">
                <p className="section-subtitle">Other Language(s): </p>
                {resume.languages?.map((item, index) => (
                  <LanguageItem
                    key={index}
                    name={item.name}
                    readingLevel={item.readingLevel}
                    writingLevel={item.writingLevel}
                    speakingLevel={item.speakingLevel}
                  />
                ))}
              </div>
            </Section>
            {/* Digital Skills*/}
            <Section title="Digital Skills">
              <p className="section-text">JavaScript, TypeScript, C#</p>
            </Section>
            {/* Soft Skills*/}
            <Section title="Soft Skills">
              <p className="section-text">Communication</p>
            </Section>
            {/* Technical Skills*/}
            <Section title="Technical Skills">
              <p className="section-text">Communication</p>
            </Section>
            {/* Hobbies and Interests*/}
            <Section title="Hobbies and Interests">
              <p className="section-text">Classic guitar, Dance, Book club</p>
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
