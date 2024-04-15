import { Document, Page, Text, View, Image } from '@react-pdf/renderer';
import React from 'react';

import { GetCoverLetterResponse } from 'src/api/coverLetters/types';
import { User } from 'src/api/users/types';
import mailIcon from 'src/assets/icons/mail-icon.png';
import phoneIcon from 'src/assets/icons/phone-icon.png';
import userIcon from 'src/assets/icons/user-icon.png';

import styles from './CoverLetterPdfViewStyle';

type CoverLetterPdfViewProps = {
  coverLetter: GetCoverLetterResponse;
  user: User;
};

const CoverLetterPdfView: React.FC<CoverLetterPdfViewProps> = ({ coverLetter, user }) => {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.coverLetterLayout}>
          <View style={styles.coverLetterPersonalInfo}>
            <View style={styles.coverLetterPersonalInfoTitle}>
              <Text>{`${user?.firstName} ${user?.lastName}`}</Text>
            </View>
            <View style={styles.coverLetterPersonalInfoContent}>
              <View style={styles.coverLetterInfoItem}>
                <Image src={userIcon} style={styles.coverLetterPersonalInfoIcon} />
                <Text>
                  {`${user?.firstName} ${user?.lastName}`}
                </Text>
              </View>
              <View style={styles.coverLetterInfoItem}>
                <Image src={mailIcon} style={styles.coverLetterPersonalInfoIcon} />
                <Text>
                  {`${user?.email}`}
                </Text>
              </View>
              <View style={styles.coverLetterInfoItem}>
                <Image src={phoneIcon} style={styles.coverLetterPersonalInfoIcon} />
                <Text>
                  {`${user?.phoneNumber || 'N/A'}`}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.coverLetterBody}>
            <Text>{coverLetter?.content}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default CoverLetterPdfView;