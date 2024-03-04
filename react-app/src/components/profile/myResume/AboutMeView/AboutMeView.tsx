interface AboutMeViewProps {
  description?: string;
}

const AboutMeView: React.FC<AboutMeViewProps> = (props) => {
  const { description } = props;

  return <p className="about-me-description">{description}</p>;
};

export default AboutMeView;
