import { Text, View } from '@react-pdf/renderer';

import styles from './PdfLanguageItemStyle';

interface PdfLanguageItemProps {
  name: string;
  readingLevel: string;
  writingLevel: string;
  speakingLevel: string;
}

const PdfLanguageItem: React.FC<PdfLanguageItemProps> = (props) => {
  const { name, readingLevel, writingLevel, speakingLevel } = props;

  return (
    <View>
      <Text style={styles.languageTitle}>{name}</Text>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Reading:</Text>
        <Text>{readingLevel}</Text>
      </View>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Writing:</Text>
        <Text>{writingLevel}</Text>
      </View>
      <View style={styles.languageLevelContainer}>
        <Text style={styles.languageLevelText}>Speaking:</Text>
        <Text>{speakingLevel}</Text>
      </View>
    </View>
  );
};

export default PdfLanguageItem;
