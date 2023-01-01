import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content, description } = education;
  const showDescription = description?.length;

  return (
    <ScrollAnimation
      animateIn="fadeInUp"
      animateOut="fadeInOut"
      animateOnce={true}
    >
      <div className="timeline-container">
        <div className="content">
          <h3 className="title">{title}</h3>
          <span className="time">{years}</span>
          <p>{content}</p>
          <ul>
            {showDescription && description.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
