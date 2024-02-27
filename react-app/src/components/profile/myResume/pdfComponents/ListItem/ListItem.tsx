import { Text, View, PDFViewerProps } from '@react-pdf/renderer';

import styles from './ListItemStyle';

interface ListItemProps {
  title: string;
  withLine?: boolean;
  withBullet?: boolean;
  children?: React.ReactNode;
  content?: string;
  titleStyle?: PDFViewerProps['style'];
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { title, withBullet = true, withLine = true, children, titleStyle } = props;

  return (
    <View style={styles.listItem}>
      <View style={styles.listHeader}>
        {withBullet && <View style={styles.bullet}></View>}
        <Text style={{ ...styles.listTitle, ...titleStyle }}>{title}</Text>
      </View>
      <View style={styles.listBody}>
        {withLine && <View style={styles.line}></View>}
        <View>{children}</View>
      </View>
    </View>
  );
};

export default ListItem;
