import { Text, View, PDFViewerProps } from '@react-pdf/renderer';

import styles from './PdfListItemStyle';

interface PdfListItemProps {
  title: string;
  withLine?: boolean;
  withBullet?: boolean;
  children?: React.ReactNode;
  content?: string;
  titleStyle?: PDFViewerProps['style'];
}

const PdfListItem: React.FC<PdfListItemProps> = (props) => {
  const { title, withBullet = true, withLine = true, children, titleStyle } = props;

  return (
    <View style={styles.listItem}>
      <View style={styles.listDecoration}>
        {withBullet && <View style={styles.listBullet}></View>}
        {withLine && <View style={styles.listLine}></View>}
      </View>
      <View style={styles.listContent}>
        <Text style={{ ...styles.listItemTitle, ...titleStyle }}>
          {title}
        </Text>
        <View style={styles.listBody}>
          <View>{children}</View>
        </View>
      </View>
    </View>
  );
};

export default PdfListItem;
