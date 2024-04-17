import { Document, Page, View, Text } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { GetResumeResponse } from 'src/api/resumes/types';

import PdfAboutMe from '../PdfAboutMe/PdfAboutMe';
import PdfCertificates from '../PdfCertificates/PdfCertificates';
import PdfContactInfo from '../PdfContactInfo/PdfContactInfo';
import PdfDrivingLicenceItem from '../PdfDrivingLicenceItem/PdfDrivingLicenceItem';
import PdfEducationAndTrainings from '../PdfEducationAndTraining/PdfEducationAndTraining';
import PdfLanguageItem from '../PdfLanguageItem/PdfLanguageItem';
import PdfPublicationItem from '../PdfPublicationItem/PdfPublicationItem';
import PdfSection from '../PdfSection/PdfSection';
import PdfVolunteeringItem from '../PdfVolunteeringItem/PdfVolunteeringItem';
import PdfWorkExperiences from '../PdfWorkExperience/PdfWorkExperience';
import styles from './ResumePdfViewStyle';

type ResumePdfViewProps = {
  resume: GetResumeResponse;
};

const ResumePdfView: React.FC<ResumePdfViewProps> = ({ resume }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });

  return (
    <Document>
      <Page
        size="A4"
        style={styles.page}
      >
        <View style={styles.container}>
          <PdfContactInfo
            name={`${resume?.firstName} ${resume?.lastName}`}
            email={resume?.email}
            phone={resume.phoneNumber}
            address={resume.location}
            linkedIn={resume.linkedinUrl}
            linkedInText="linkedin"
            imgUrl={resume.profilePicture}
          />
          <View style={styles.contentSection}>
            {/* About Me*/}
            <PdfSection title={t('aboutMeSection.header')}>
              <PdfAboutMe description={resume.summary} />
            </PdfSection>
            {/* Education And Training*/}
            <PdfSection title={t('educationAndTrainingsSection.headerPlural')}>
              <PdfEducationAndTrainings educationAndTrainings={resume.educations || []} />
            </PdfSection>
            {/* Work Experience*/}
            <PdfSection title={t('workExperiencesSection.headerPlural')}>
              <PdfWorkExperiences workExperiences={resume.experiences || []} />
            </PdfSection>
            {/* Languages*/}
            <PdfSection title={t('languagesSection.headerPlural')}>
              <Text style={styles.sectionText}>
                <Text style={styles.sectionSubTitle}>{t('languagesSection.motherTongue')}: </Text>
                {resume.languages
                  ?.filter((language) => language.isNative)
                  .map((language) => <Text key={language.name}>{language.name}</Text>)}
              </Text>
              <View style={{ gap: 10 }}>
                <Text style={styles.sectionSubTitle}>{t('languagesSection.otherLanguages')}: </Text>
                {resume.languages
                  ?.filter((language) => !language.isNative)
                  .map((language) => (
                    <PdfLanguageItem
                      key={language.name}
                      name={language.name}
                      reading={language.reading}
                      writing={language.writing}
                      speaking={language.speaking}
                      isNative={language.isNative}
                    />
                  ))}
              </View>
            </PdfSection>

            {/* Digital Skills*/}
            <PdfSection title={t('digitalSkillsSection.headerPlural')}>
              <Text style={styles.sectionText}>{resume.digitalSkills}</Text>
            </PdfSection>
            {/* Soft Skills*/}
            <PdfSection title={t('softSkillsSection.headerPlural')}>
              <Text style={styles.sectionText}>{resume.softSkills}</Text>
            </PdfSection>
            {/* Hobbies and Interests*/}
            <PdfSection title={t('hobbiesSection.headerPlural')}>
              <Text style={styles.sectionText}>{resume.hobbies}</Text>
            </PdfSection>
            {/* Certificate(s)*/}
            <PdfSection title={t('certificatesSection.headerPlural')}>
              <PdfCertificates certificates={resume?.certificates || []} />
            </PdfSection>
            {/* Volunteering*/}
            <PdfSection title={t('volunteeringsSection.headerPlural')}>
              {resume.volunteering?.map((volunteering) => (
                <PdfVolunteeringItem
                  key={volunteering.role}
                  role={volunteering.role}
                  organization={volunteering.organization}
                  startDate={volunteering.startDate}
                  endDate={volunteering.endDate}
                />
              ))}
            </PdfSection>
            {/* Publication(s)*/}
            <PdfSection title={t('publicationsSection.headerPlural')}>
              {resume.publications?.map((publication) => (
                <PdfPublicationItem
                  key={publication.name}
                  name={publication.name}
                  releaseDate={publication.releaseDate}
                  link={publication.link}
                />
              ))}
            </PdfSection>
            <PdfSection title={t('drivingLicencesSection.headerPlural')}>
              <PdfDrivingLicenceItem drivingLicences={([resume.drivingLicense] as string[]) || []} />
            </PdfSection>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePdfView;
