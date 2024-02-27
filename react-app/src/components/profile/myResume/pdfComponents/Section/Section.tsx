import { Text, View, ViewProps } from '@react-pdf/renderer';

import styles from './SectionStyle';

interface SectionProps extends ViewProps {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
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

export default Section;
