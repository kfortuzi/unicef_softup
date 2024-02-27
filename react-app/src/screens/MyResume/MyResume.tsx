import { Document, Page, PDFViewer, View, Text } from '@react-pdf/renderer';
import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from 'src/components/common/Button/Button';
import AboutMe from 'src/components/profile/myResume/pdfComponents/AboutMe/AboutMe';
import Certifications from 'src/components/profile/myResume/pdfComponents/Certifications/Certifications';
import ContactInfo from 'src/components/profile/myResume/pdfComponents/ContactInfo/ContactInfo';
import DrivingLicenseItem from 'src/components/profile/myResume/pdfComponents/DrivingLicenseItem/DrivingLicenseItem';
import EducationAndTrainings from 'src/components/profile/myResume/pdfComponents/EducationAndTraining/EducationAndTraining';
import LanguageItem from 'src/components/profile/myResume/pdfComponents/LanguageItem/LanguageItem';
import PublicationItem from 'src/components/profile/myResume/pdfComponents/PublicationItem/PublicationItem';
import Section from 'src/components/profile/myResume/pdfComponents/Section/Section';
import VolunteeringItem from 'src/components/profile/myResume/pdfComponents/VolunteeringItem/VolunteeringItem';
import WorkExperiences from 'src/components/profile/myResume/pdfComponents/WorkExperience/WorkExperience';
import i18n from 'src/locales';

import styles from './MyResumeStyle';

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
                <ContactInfo
                  imgUrl={imgUrl}
                  name="Emre KAS"
                  address="Baglarbasi Mah. 123. Sok. No: 5"
                  email="yunuskas55@gmail.com"
                  linkedIn="https://www.linkedin.com/in/emre-kas"
                />
                <View style={styles.contentSection}>
                  {/* About Me*/}
                  <Section title="About Me">
                    <AboutMe
                      description={`I am a software developer with 3 years of experience in web development.`}
                    />
                  </Section>
                  {/* Education And Training*/}
                  <Section title="Education And Training">
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
                  <Section title="Work Experience">
                    <WorkExperiences
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
                  </Section>
                  {/* Languages*/}
                  <Section title="Languages">
                    <Text style={styles.sectionText}>
                      <Text style={styles.sectionSubTitle}>Mother Toungue(s): </Text>
                      Turkish
                    </Text>
                    <View style={{ gap: 10 }}>
                      <Text style={styles.sectionSubTitle}>Other Language(s): </Text>
                      <LanguageItem
                        language="English"
                        reading="C1"
                        writing="C1"
                        speaking="C1"
                      />
                      <LanguageItem
                        language="English"
                        reading="C1"
                        writing="C1"
                        speaking="C1"
                      />
                    </View>
                  </Section>

                  {/* Digital Skills*/}
                  <Section title="Digital Skills">
                    <Text style={styles.sectionText}>JavaScript, TypeScript, C#</Text>
                  </Section>
                  {/* Soft Skills*/}
                  <Section title="Soft Skills">
                    <Text style={styles.sectionText}>Communication</Text>
                  </Section>
                  {/* Technical Skills*/}
                  <Section title="Technical Skills">
                    <Text style={styles.sectionText}>Communication</Text>
                  </Section>
                  {/* Hobbies and Interests*/}
                  <Section title="Hobbies and Interests">
                    <Text style={styles.sectionText}>Classic guitar, Dance, Book club</Text>
                  </Section>
                  {/* Certification(s)*/}
                  <Section title="Certification(s)">
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
                  <Section title="Volunteering">
                    <VolunteeringItem
                      title="Volunteer"
                      organization="Kocaeli University"
                      startDate="2015"
                      endDate="2016"
                    />
                  </Section>
                  {/* Publication(s)*/}
                  <Section title="Publication(s)">
                    <PublicationItem
                      name="React js Technical Article"
                      date="2021"
                    />
                  </Section>
                  <Section title="Driving License(s)">
                    <DrivingLicenseItem
                      drivingLicenses={[{ drivingLicense: 'B2' }, { drivingLicense: 'A1' }]}
                    />
                  </Section>
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
