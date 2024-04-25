import { Text, View } from '@react-pdf/renderer';

import { Language } from 'src/api/resumes/types';
import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfLanguageItemStyle';

type PdfLanguageItemProps = Language;

const PdfLanguageItem: React.FC<PdfLanguageItemProps> = (props) => {
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)])
  );

  const { name, reading, writing, speaking } = omittedFalsyProps;

  return (
    <View>
      <Text style={styles.languageTitle}>{name}</Text>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Reading:</Text>
        <Text>{reading}</Text>
      </View>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Writing:</Text>
        <Text>{writing}</Text>
      </View>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Speaking:</Text>
        <Text>{speaking}</Text>
      </View>
    </View>
  );
};

export default PdfLanguageItem;
