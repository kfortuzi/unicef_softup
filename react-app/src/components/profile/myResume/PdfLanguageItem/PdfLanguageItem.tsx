import { Text, View } from '@react-pdf/renderer';

import { Language } from 'src/api/resumes/types';

import styles from './PdfLanguageItemStyle';

type PdfLanguageItemProps = Language;

const PdfLanguageItem: React.FC<PdfLanguageItemProps> = (props) => {
  const { name, reading, writing, speaking } = props;

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
