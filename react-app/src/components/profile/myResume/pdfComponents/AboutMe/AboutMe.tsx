import { Text } from '@react-pdf/renderer';

import styles from './AboutMeStyle';

interface AboutMeProps {
  description?: string;
}

const AboutMe: React.FC<AboutMeProps> = (props) => {
  const { description } = props;

  return <Text style={styles.description}>{description}</Text>;
};

export default AboutMe;
