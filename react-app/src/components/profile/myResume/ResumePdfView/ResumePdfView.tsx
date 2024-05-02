import { Document, Page, View, Text } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { GetResumeResponse } from 'src/api/resumes/types';

import PdfAboutMe from '../PdfAboutMe/PdfAboutMe';
import PdfCertificates from '../PdfCertificates/PdfCertificates';
import PdfContactInfo from '../PdfContactInfo/PdfContactInfo';
import PdfDrivingLicenseItem from '../PdfDrivingLicenseItem/PdfDrivingLicenseItem';
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
            {resume.educations && resume.educations?.length > 0 && (
              <PdfSection title={t('educationAndTrainingsSection.headerPlural')}>
                <PdfEducationAndTrainings educationAndTrainings={resume.educations} />
              </PdfSection>
            )}

            {/* Work Experience*/}
            {resume.experiences && resume.experiences?.length > 0 && (
              <PdfSection title={t('workExperiencesSection.headerPlural')}>
                <PdfWorkExperiences workExperiences={resume.experiences} />
              </PdfSection>
            )}

            {/* Languages*/}
            {resume.languages && resume.languages?.length > 0 && (
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
            )}

            {/* Digital Skills*/}
            {resume.digitalSkills && resume.digitalSkills.length > 0 && (
              <PdfSection title={t('digitalSkillsSection.headerPlural')}>
                {resume.digitalSkills?.map((skill) => (
                  <Text key={skill} style={styles.sectionText}>{skill}</Text>
                ))}
              </PdfSection>
            )}

            {/* Soft Skills*/}
            {resume.softSkills && resume.softSkills.length > 0 && (
              <PdfSection title={t('softSkillsSection.headerPlural')}>
                {resume.softSkills?.map((skill) => (
                  <Text key={skill} style={styles.sectionText}>{skill}</Text>
                ))}
              </PdfSection>
            )}

            {/* Technical Skills*/}
            {resume.technicalSkills && resume.technicalSkills.length > 0 && (
              <PdfSection title={t('technicalSkillsSection.headerPlural')}>
                {resume.technicalSkills?.map((skill) => (
                  <Text key={skill} style={styles.sectionText}>{skill}</Text>
                ))}
              </PdfSection>
            )}

            {/* Hobbies and Interests*/}
            {resume.hobbies && resume.hobbies.length > 0 && (
              <PdfSection title={t('hobbiesSection.headerPlural')}>
                {resume.hobbies?.map((hobby) => (
                  <Text key={hobby} style={styles.sectionText}>{hobby}</Text>
                ))}
              </PdfSection>
            )}

            {/* Certificate(s)*/}
            {resume.certificates && resume.certificates.length > 0 && (
              <PdfSection title={t('certificatesSection.headerPlural')}>
                <PdfCertificates certificates={resume?.certificates || []} />
              </PdfSection>
            )}

            {/* Volunteering*/}
            {resume.volunteering && resume.volunteering.length > 0 && (
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
            )}

            {/* Publication(s)*/}
            {resume.publications && resume.publications.length > 0 && (
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
            )}

            {/* Driving License*/}
            {resume.drivingLicense && (
              <PdfSection title={t('drivingLicensesSection.headerPlural')}>
                <PdfDrivingLicenseItem drivingLicense={resume?.drivingLicense || ''} />
              </PdfSection>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePdfView;
