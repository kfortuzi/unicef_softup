import { DownloadOutlined } from '@ant-design/icons';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Col, Row } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

import useGetJob from 'src/api/jobs/hooks/useGetJob';
import { GetResumeResponse } from 'src/api/resumes/types';

import AboutMeForm from '../AboutMeForm/AboutMeForm';
import AboutMeView from '../AboutMeView/AboutMeView';
import CertificatesForm from '../CertificatesForm/CertificatesForm';
import CertificatesView from '../CertificatesView/CertificatesView';
import ContactInfoForm from '../ContactInfoForm/ContactInfoForm';
import ContactInfoView from '../ContactInfoView/ContactInfoView';
import DigitalSkillsForm from '../DigitalSkillsForm/DigitalSkillsForm';
import DrivingLicenseForm from '../DrivingLicenseForm/DrivingLicenseForm';
import DrivingLicenseView from '../DrivingLicenseView/DrivingLicenseView';
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
import TechnicalSkillsForm from '../TechnicalSkills/TechnicalSkillsForm';
import VolunteeringForm from '../VolunteeringForm/VolunteeringForm';
import VolunteeringItem from '../VolunteeringItem/VolunteeringItem';
import WorkExperiencesForm from '../WorkExperiencesForm/WorkExperiencesForm';
import WorkExperiencesView from '../WorkExperiencesView/WorkExperiencesView';

type MyResumeViewProps = {
  resume: GetResumeResponse;
};

const MyResumeView: React.FC<MyResumeViewProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const resume = props.resume;

  const { data: job } = useGetJob({ id: resume?.referenceId });

  const { firstName, email, linkedinUrl, location, profilePicture, summary, phoneNumber, lastName } = resume;

  return (
    <div className="my-resume-layout" key={`resume-view-${resume.id}`}>
      <div className="slide-container">
        <div className="cv-header">
          <h1>
            {job?.company} {t('header')}
          </h1>
          <PDFDownloadLink document={<ResumePdfView resume={resume} />}>
            {t('downloadPdfButtonText')} <DownloadOutlined />
          </PDFDownloadLink>
        </div>
        <div className="my-resume-body">

          <Row justify="center" wrap={true} style={{ width: '100%' }}>
            <Col
              className='contact-section'
              xs={24}
              sm={24}
              md={24}
              xl={8}
              xxl={8}
            >
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
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              xl={16}
              xxl={16}
              className="content-section"
            >
              <div>
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
                  <ul style={{ paddingLeft: '1rem' }}>
                    {resume?.digitalSkills?.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                  <DigitalSkillsForm
                    cvId={resume.id}
                    digitalSkills={resume?.digitalSkills || []}
                  />
                </Section>
                {/* Technical Skills*/}
                <Section title={t('technicalSkillsSection.headerPlural')}>
                  <ul style={{ paddingLeft: '1rem' }}>
                    {resume?.technicalSkills?.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                  <TechnicalSkillsForm
                    cvId={resume.id}
                    technicalSkills={resume?.technicalSkills || []}
                  />
                </Section>
                {/* Soft Skills*/}
                <Section title={t('softSkillsSection.headerPlural')}>
                  <ul style={{ paddingLeft: '1rem' }}>
                    {resume?.softSkills?.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                  <SoftSkillsForm
                    cvId={resume.id}
                    softSkills={resume?.softSkills || []}
                  />
                </Section>
                {/* Hobbies and Interests*/}
                <Section title={t('hobbiesSection.headerPlural')}>
                  <ul style={{ paddingLeft: '1rem' }}>
                    {resume?.hobbies?.map((hobby) => <li key={hobby}>{hobby}</li>)}
                  </ul>
                  <HobbiesForm
                    cvId={resume.id}
                    hobbies={resume?.hobbies}
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
                      releaseDate={publication?.releaseDate}
                      link={publication.link}
                    />
                  ))}
                  <PublicationsForm
                    cvId={resume.id}
                    publications={resume?.publications || []}
                  />
                </Section>
                <Section title={t('drivingLicensesSection.headerSingular')}>
                  <DrivingLicenseView drivingLicense={resume?.drivingLicense || ''} />
                  <DrivingLicenseForm
                    cvId={resume.id}
                    drivingLicense={resume?.drivingLicense || ''}
                  />
                </Section>
              </div>
            </Col>
          </ Row>
        </div>
      </div>
    </div>
  );
};

export default MyResumeView;
