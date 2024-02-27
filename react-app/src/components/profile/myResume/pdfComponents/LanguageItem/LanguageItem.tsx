import { Text, View } from '@react-pdf/renderer';

import styles from './LanguageItemStyle';

interface LanguageItemProps {
  language: string;
  reading: string;
  writing: string;
  speaking: string;
}

const LanguageItem: React.FC<LanguageItemProps> = (props) => {
  const { language, reading, writing, speaking } = props;

  return (
    <View>
      <Text style={styles.languageTitle}>{language}</Text>
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

export default LanguageItem;
