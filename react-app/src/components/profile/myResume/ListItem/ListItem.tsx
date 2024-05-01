interface ListItemProps {
  title: string;
  withLine?: boolean;
  withBullet?: boolean;
  children?: React.ReactNode;
  titleStyle?: React.CSSProperties;
}

const ListItem: React.FC<ListItemProps> = (props) => {
  const { title, withBullet = true, withLine = true, children, titleStyle } = props;

  return (
    <div className="list-item">
      <div className="list-header">
        {withBullet && <div className="list-bullet"></div>}
        <p
          className="list-title"
          style={titleStyle}
        >
          {title}
        </p>
      </div>
      <div className="list-body">
        {withLine && <div className="list-line"></div>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ListItem;
