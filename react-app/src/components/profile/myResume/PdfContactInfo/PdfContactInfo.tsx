import { Image, View, Text, Link } from '@react-pdf/renderer';

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
  const { imgUrl, name, nationality, address, phone, email, linkedIn, linkedInText } = props;

  return (
    <View style={styles.contactSection}>
      <View style={styles.profilePicSection}>
        <Image
          style={{
            objectFit: 'cover',
            height: 180,
            width: '100%',
            borderRadius: '50%',
          }}
          src={imgUrl}
        />
        <Text style={styles.name}>{name}</Text>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>Nationality:</Text>
          <Text style={styles.groupValue}>{nationality}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>Phone:</Text>
          <Text style={styles.groupValue}>{phone}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>Email:</Text>
          <Text style={styles.groupValue}>{email}</Text>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>Linkedin:</Text>
          <Link
            href={linkedIn}
            style={styles.groupValue}
          >
            {linkedInText}
          </Link>
        </View>
        <View style={styles.infoGroup}>
          <Text style={styles.groupTitle}>Address:</Text>
          <Text style={styles.groupValue}>{address}</Text>
        </View>
      </View>
    </View>
  );
};

export default PdfContactInfo;
