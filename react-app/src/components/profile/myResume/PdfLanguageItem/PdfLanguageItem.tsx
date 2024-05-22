import { Text, View } from '@react-pdf/renderer';

import { Language } from 'src/api/resumes/types';
import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfLanguageItemStyle';

type PdfLanguageItemProps = Language;

const PdfLanguageItem: React.FC<PdfLanguageItemProps> = (props) => {
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)]),
  );

  const { name, reading, writing, speaking } = omittedFalsyProps;

  return (
    <View>
      <Text style={styles.languageTitle}>{name}</Text>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Reading:</Text>
        <Text style={styles.languageLevelText}>{reading}</Text>
      </View>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Writing:</Text>
        <Text style={styles.languageLevelText}>{writing}</Text>
      </View>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Speaking:</Text>
        <Text style={styles.languageLevelText}>{speaking}</Text>
      </View>
    </View>
  );
};

export default PdfLanguageItem;
