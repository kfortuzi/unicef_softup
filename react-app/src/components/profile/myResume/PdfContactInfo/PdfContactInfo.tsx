import { Image, View, Text, Link } from '@react-pdf/renderer';
import { useTranslation } from 'react-i18next';

import AddressIcon from 'src/assets/icons/address-icon.png';
import EmailIcon from 'src/assets/icons/email-icon.png';
import LinkedinIcon from 'src/assets/icons/linkedin-icon.png';
import NationalityIcon from 'src/assets/icons/nationality-icon.png';
import PhoneIcon from 'src/assets/icons/phone-icon.png';
import UserPlaceholderImage from 'src/assets/images/user-placeholder.jpeg';
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

  return (
    <View style={styles.contactSection}>
      <View style={styles.profilePicSection}>
        <Image
          style={{
            objectFit: 'cover',
            height: 120,
            width: 120,
            borderRadius: '50%',
          }}
          source={{
            uri: imgUrl || UserPlaceholderImage,
            headers: { Pragma: 'no-cache', 'Cache-Control': 'no-cache' },
            method: 'GET',
            body: null,
          }}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.infoGroup}>
          <View style={styles.groupTitle}>
            <Image source={NationalityIcon} style={styles.icon} />
            <Text>{t('nationality')}</Text>
          </View>
          <Text style={styles.groupValue}>{nationality}</Text>
        </View>
        <View style={styles.infoGroup}>
          <View style={styles.groupTitle}>
            <Image source={PhoneIcon} style={styles.icon} />
            <Text>{t('phoneNumber')}</Text>
          </View>
          <Text style={styles.groupValue}>{phone}</Text>
        </View>
        <View style={styles.infoGroup}>
          <View style={styles.groupTitle}>
            <Image source={EmailIcon} style={styles.icon} />
            <Text>{t('email')}</Text>
          </View>
          <Text style={styles.groupValue}>{email}</Text>
        </View>
        <View style={styles.infoGroup}>
          <View style={styles.groupTitle}>
            <Image source={LinkedinIcon} style={styles.icon} />
            <Text>{t('linkedin')}</Text>
          </View>
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
          <View style={styles.groupTitle}>
            <Image source={AddressIcon} style={styles.icon} />
            <Text>{t('address')}</Text>
          </View>
          <Text style={styles.groupValue}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

export default PdfContactInfo;
