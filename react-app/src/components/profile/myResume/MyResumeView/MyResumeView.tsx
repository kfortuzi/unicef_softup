import { DownloadOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetJob from 'src/api/jobs/hooks/useGetJob';
import { GetResumeResponse } from 'src/api/resumes/types';
import Button from 'src/components/common/Button/Button';

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
import ResumePdfView from '../ResumePdfView/ResumePdfView';
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

  const { data: job } = useGetJob({ id: resume?.referenceId });

  const { firstName, email, linkedinUrl, location, profilePicture, summary, phoneNumber, lastName } = resume;

  return (
    <div className="my-resume-layout">
      <div className="slide-container">
        <div className='cv-header'>
          <h1>
            {job?.company} {t('header')}
          </h1>
          <PDFDownloadLink document={<ResumePdfView resume={resume} />}>
            <Button
              text={t('downloadPdfButtonText')}
              type="primary"
              icon={<DownloadOutlined />}
            />
          </PDFDownloadLink>
        </div>
        <div className="my-resume-body">
          <div className="contact-section">
            <ContactInfoView
              cvId={resume.id}
              profilePicture={profilePicture}
              name={firstName}
              surname={lastName}
              email={email}
              linkedinUrl={linkedinUrl}
              linkedinText="linkedin"
              address={location}
              phoneNumber={phoneNumber}
            />
            <ContactInfoForm
              cvId={resume.id}
              profilePicture={profilePicture}
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
                cvId={resume.id}
                aboutMe={summary}
                workExperiences={resume?.experiences}
              />
            </Section>
            {/* Education And Training*/}
            <Section title={t('educationAndTrainingsSection.headerPlural')}>
              <EducationAndTrainings educationAndTrainings={resume.educations} />
              <EducationAndTrainingsForm
                cvId={resume.id}
                educationAndTrainings={resume.educations}
              />
            </Section>
            {/* Work Experience*/}
            <Section title={t('workExperiencesSection.headerPlural')}>
              <WorkExperiencesView workExperiences={resume.experiences || []} />
              <WorkExperiencesForm
                cvId={resume.id}
                workExperiences={resume.experiences || []}
              />
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
              <LanguagesForm
                cvId={resume.id}
                languages={resume?.languages}
              />
            </Section>
            {/* Digital Skills*/}
            <Section title={t('digitalSkillsSection.headerPlural')}>
              <p className="section-text">{resume?.digitalSkills?.replace(',', ', ')}</p>
              <DigitalSkillsForm
                cvId={resume.id}
                digitalSkills={resume?.digitalSkills?.split(',') || []}
              />
            </Section>
            {/* Soft Skills*/}
            <Section title={t('softSkillsSection.headerPlural')}>
              <p className="section-text">{resume?.softSkills?.replace(',', ', ')}</p>
              <SoftSkillsForm
                cvId={resume.id}
                softSkills={resume?.softSkills?.split(',') || []}
              />
            </Section>
            {/* Hobbies and Interests*/}
            <Section title={t('hobbiesSection.headerPlural')}>
              <p className="section-text">{resume?.hobbies?.replace(',', ', ')}</p>
              <HobbiesForm
                cvId={resume.id}
                hobbies={resume?.hobbies?.split(',')}
              />
            </Section>
            {/* Certificates*/}
            <Section title={t('certificatesSection.headerPlural')}>
              <CertificatesView certificates={resume?.certificates || []} />
              <CertificatesForm
                cvId={resume.id}
                certificates={resume?.certificates || []}
              />
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
              <VolunteeringForm
                cvId={resume.id}
                volunteering={resume?.volunteering || []}
              />
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
              <PublicationsForm
                cvId={resume.id}
                publications={resume?.publications || []}
              />
            </Section>
            <Section title={t('drivingLicencesSection.headerPlural')}>
              <DrivingLicenceView drivingLicences={resume?.drivingLicense?.split(',') || []} />
              <DrivingLicenceForm
                cvId={resume.id}
                drivingLicences={resume?.drivingLicense?.split(',') || []}
              />
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResumeView;
