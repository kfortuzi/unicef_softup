import { Text, View, ViewProps } from '@react-pdf/renderer';

import styles from './PdfSectionStyle';

interface PdfSectionProps extends ViewProps {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const PdfSection: React.FC<PdfSectionProps> = (props) => {
  const { title, subTitle, children, ...rest } = props;

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
