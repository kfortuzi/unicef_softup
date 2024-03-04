import { Document, Page, PDFViewer, View, Text } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';
import i18n from 'src/locales';

import PdfAboutMe from '../PdfAboutMe/PdfAboutMe';
import PdfCertifications from '../PdfCertifications/PdfCertifications';
import PdfContactInfo from '../PdfContactInfo/PdfContactInfo';
import PdfDrivingLicenseItem from '../PdfDrivingLicenseItem/PdfDrivingLicenseItem';
import PdfEducationAndTrainings from '../PdfEducationAndTraining/PdfEducationAndTraining';
import PdfLanguageItem from '../PdfLanguageItem/PdfLanguageItem';
import PdfPublicationItem from '../PdfPublicationItem/PdfPublicationItem';
import PdfSection from '../PdfSection/PdfSection';
import PdfVolunteeringItem from '../PdfVolunteeringItem/PdfVolunteeringItem';
import PdfWorkExperiences from '../PdfWorkExperience/PdfWorkExperience';
import styles from './ResumePdfViewStyle';

const MyResume: React.FC = () => {
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
                  <PdfSection title="About Me">
                    <PdfAboutMe
                      description={`I am a software developer with 3 years of experience in web development.`}
                    />
                  </PdfSection>
                  {/* Education And Training*/}
                  <PdfSection title="Education And Trainings">
                    <PdfEducationAndTrainings
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
                  </PdfSection>
                  {/* Work Experience*/}
                  <PdfSection title="Work Experiences">
                    <PdfWorkExperiences
                      workExperiences={[
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
                      ]}
                    />
                  </PdfSection>
                  {/* Languages*/}
                  <PdfSection title="Languages">
                    <Text style={styles.sectionText}>
                      <Text style={styles.sectionSubTitle}>Mother Toungue(s): </Text>
                      Turkish
                    </Text>
                    <View style={{ gap: 10 }}>
                      <Text style={styles.sectionSubTitle}>Other Language(s): </Text>
                      <PdfLanguageItem
                        name="English"
                        readingLevel="C1"
                        writingLevel="C1"
                        speakingLevel="C1"
                      />
                      <PdfLanguageItem
                        name="English"
                        readingLevel="C1"
                        writingLevel="C1"
                        speakingLevel="C1"
                      />
                    </View>
                  </PdfSection>

                  {/* Digital Skills*/}
                  <PdfSection title="Digital Skills">
                    <Text style={styles.sectionText}>JavaScript, TypeScript, C#</Text>
                  </PdfSection>
                  {/* Soft Skills*/}
                  <PdfSection title="Soft Skills">
                    <Text style={styles.sectionText}>Communication</Text>
                  </PdfSection>
                  {/* Technical Skills*/}
                  <PdfSection title="Technical Skills">
                    <Text style={styles.sectionText}>Communication</Text>
                  </PdfSection>
                  {/* Hobbies and Interests*/}
                  <PdfSection title="Hobbies and Interests">
                    <Text style={styles.sectionText}>Classic guitar, Dance, Book club</Text>
                  </PdfSection>
                  {/* Certification(s)*/}
                  <PdfSection title="Certifications">
                    <PdfCertifications
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
                  </PdfSection>
                  {/* Volunteering*/}
                  <PdfSection title="Volunteerings">
                    <PdfVolunteeringItem
                      title="Volunteer"
                      organization="Kocaeli University"
                      startDate="2015"
                      endDate="2016"
                    />
                  </PdfSection>
                  {/* Publication(s)*/}
                  <PdfSection title="Publications">
                    <PdfPublicationItem
                      name="React js Technical Article"
                      date="2021"
                    />
                  </PdfSection>
                  <PdfSection title="Driving Licenses">
                    <PdfDrivingLicenseItem
                      drivingLicenses={[{ drivingLicense: 'B2' }, { drivingLicense: 'A1' }]}
                    />
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

export default MyResume;
