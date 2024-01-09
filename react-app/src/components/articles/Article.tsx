import { Typography } from 'antd';

import Card from '../common/Card/Card';

interface Props {
  title: string;
  content: string;
}

const Article: React.FC<Props> = ({ title, content }) => (
  <Card
    title={title}
    className="article"
  >
    <Typography.Paragraph className="article-content">{content}</Typography.Paragraph>
  </Card>
);

export default Article;
