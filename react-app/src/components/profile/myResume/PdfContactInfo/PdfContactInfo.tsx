import { Image, View, Text, Link } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import UserPlaceholderImage from 'src/assets/images/user-placeholder.jpeg';
import imgUrlToBase64 from 'src/utils/imgUrlToBase64';
import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfContactInfoStyle';

interface PdfContactInfoProps {
  imgUrl?: string;
  name?: string;
  nationality?: string;
  address?: string;
  phone?: string;
  email?: string;
  linkedIn?: string;
  linkedInText?: string;
}

const PdfContactInfo: React.FC<PdfContactInfoProps> = (props) => {
  const { t } = useTranslation('translation', { keyPrefix: 'profile.myResume.contactInfoSection' });
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)])
  );

  const { imgUrl, name, nationality, address, phone, email, linkedIn, linkedInText } = omittedFalsyProps;
  const [profilePic, setProfilePic] = useState<string | null>('');

  useEffect(() => {
    if (imgUrl) {
      imgUrlToBase64(imgUrl).then((base64) => {
        return setProfilePic(base64?.toString() || null);
      });
    }
  }, [imgUrl]);

  return (
    <View style={styles.contactSection}>
      <View style={styles.profilePicSection}>
        <Image
          style={{
            objectFit: 'cover',
            height: 180,
            width: 180,
            borderRadius: '50%',
          }}
          src={profilePic || UserPlaceholderImage}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>{t('nationality')}</Text>
          <Text style={styles.groupValue}>{nationality}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>{t('phoneNumber')}</Text>
          <Text style={styles.groupValue}>{phone}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>{t('email')}</Text>
          <Text style={styles.groupValue}>{email}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>{t('linkedin')}</Text>
          {linkedIn ? (
            <Link
              href={linkedIn}
              style={styles.groupValue}
            >
              {linkedInText}
            </Link>
          ) : null}
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>{t('address')}</Text>
          <Text style={styles.groupValue}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

export default PdfContactInfo;
