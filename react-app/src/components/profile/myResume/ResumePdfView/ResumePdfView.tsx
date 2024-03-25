import { Document, Page, PDFViewer, View, Text } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';
import i18n from 'src/locales';

import resume from '../../../../api/resumes/getResumeResponse.json';
import PdfAboutMe from '../PdfAboutMe/PdfAboutMe';
import PdfCertifications from '../PdfCertifications/PdfCertifications';
import PdfContactInfo from '../PdfContactInfo/PdfContactInfo';
import PdfDrivingLicenceItem from '../PdfDrivingLicenceItem/PdfDrivingLicenceItem';
import PdfEducationAndTrainings from '../PdfEducationAndTraining/PdfEducationAndTraining';
import PdfLanguageItem from '../PdfLanguageItem/PdfLanguageItem';
import PdfPublicationItem from '../PdfPublicationItem/PdfPublicationItem';
import PdfSection from '../PdfSection/PdfSection';
import PdfVolunteeringItem from '../PdfVolunteeringItem/PdfVolunteeringItem';
import PdfWorkExperiences from '../PdfWorkExperience/PdfWorkExperience';
import styles from './ResumePdfViewStyle';

const ResumePdfView: React.FC = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume' });
  const imgUrl =
    'https://static.vecteezy.com/system/resources/previews/034/601/899/large_2x/portrait-of-a-cat-wearing-sunglasses-on-the-sunset-background-ai-generated-free-photo.jpg';

  return (
    <div className="container">
      <div className="header">
        <h1>{t('header')}</h1>
      </div>
      <div className="content">
        <PDFViewer
          width={'100%'}
          height={'1200px'}
        >
          <Document>
            <Page
              size="A4"
              style={styles.page}
            >
              <View style={styles.container}>
                <PdfContactInfo
                  imgUrl={imgUrl}
                  name="Emre KAS"
                  address="Baglarbasi Mah. 123. Sok. No: 5"
                  email="yunuskas55@gmail.com"
                  linkedIn="https://www.linkedin.com/in/emrekas/"
                  linkedInText="Emre Kas"
                />
                <View style={styles.contentSection}>
                  {/* About Me*/}
                  <PdfSection title={t('aboutMeSection.header')}>
                    <PdfAboutMe
                      description={`I am a software developer with 3 years of experience in web development.`}
                    />
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
                        .filter((language) => language.isNative)
                        .map((language) => (
                          <Text key={language.name}>{language.name}</Text>
                        ))}
                    </Text>
                    <View style={{ gap: 10 }}>
                      <Text style={styles.sectionSubTitle}>{t('languagesSection.otherLanguages')}: </Text>
                      {resume.languages
                        .filter((language) => !language.isNative)
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
                    <Text style={styles.sectionText}>{resume.digitalSkills.join(', ')}</Text>
                  </PdfSection>
                  {/* Soft Skills*/}
                  <PdfSection title={t('softSkillsSection.headerPlural')}>
                    <Text style={styles.sectionText}>{resume.softSkills.join(', ')}</Text>
                  </PdfSection>
                  {/* Technical Skills*/}
                  <PdfSection title={t('technicalSkillsSection.headerPlural')}>
                    <Text style={styles.sectionText}>{resume.technicalSkills.join(', ')}</Text>
                  </PdfSection>
                  {/* Hobbies and Interests*/}
                  <PdfSection title={t('hobbiesSection.headerPlural')}>
                    <Text style={styles.sectionText}>{resume.hobbies.join(', ')}</Text>
                  </PdfSection>
                  {/* Certification(s)*/}
                  <PdfSection title={t('certificationsSection.headerPlural')}>
                    <PdfCertifications certifications={resume.certifications || []} />
                  </PdfSection>
                  {/* Volunteering*/}
                  <PdfSection title={t('volunteeringsSection.headerPlural')}>
                    <PdfVolunteeringItem
                      role="Volunteer"
                      organization="Kocaeli University"
                      startDate="2015"
                      endDate="2016"
                    />
                  </PdfSection>
                  {/* Publication(s)*/}
                  <PdfSection title={t('publicationsSection.headerPlural')}>
                    <PdfPublicationItem
                      name="React js Technical Article"
                      releaseDate="2021"
                    />
                  </PdfSection>
                  <PdfSection title={t('drivingLicencesSection.headerPlural')}>
                    <PdfDrivingLicenceItem drivingLicences={resume.drivingLicences || []} />
                  </PdfSection>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>

      <div className="button-group">
        <Button
          type="default"
          htmlType="button"
          text={i18n.t('globalStrings.edit')}
        />
        <Button
          type="default"
          htmlType="button"
          text={i18n.t('globalStrings.download')}
        />
      </div>
    </div>
  );
};

export default ResumePdfView;
