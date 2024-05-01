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
      <div className="list-decoration">
        {withBullet && <div className="list-bullet"></div>}
        {withLine && <div className="list-line"></div>}
      </div>
      <div className="list-content">
        <div className="list-title">
          <p
            style={titleStyle}
          >
            {title}
          </p>
        </div>
        <div className="list-body">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
