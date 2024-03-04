interface SectionProps {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = (props) => {
  const { title, subTitle, children, ...rest } = props;

  return (
    <div
      className="section"
      {...rest}
    >
      <p className="section-title">{title}</p>
      {subTitle && <p className="section-subtitle">{subTitle}</p>}
      {children}
    </div>
  );
};

export default Section;
