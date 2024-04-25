import { Text, View, ViewProps } from '@react-pdf/renderer';

import { omitFalsyValue } from 'src/utils/stringUtils';

import styles from './PdfSectionStyle';

interface PdfSectionProps extends ViewProps {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const PdfSection: React.FC<PdfSectionProps> = (props) => {
  const omittedFalsyProps = Object.fromEntries(
    Object.entries(props).map(([key, value]) => [key, omitFalsyValue(value)])
  );
  const { title, subTitle, children, ...rest } = omittedFalsyProps;

  return (
    <View
      style={styles.section}
      wrap={false}
      {...rest}
    >
      <Text style={styles.sectionTitle}>{title}</Text>
      {subTitle && <Text style={styles.sectionSubTitle}>{subTitle}</Text>}
      {children}
    </View>
  );
};

export default PdfSection;
