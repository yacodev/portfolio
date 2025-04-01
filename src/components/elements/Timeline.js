import ScrollAnimation from "react-animate-on-scroll";

function Timeline({ education }) {
  const { years, title, content, description, technologies, achievements } =
    education;
  const showDescription = description?.length;
  const showAchievements = achievements?.length;

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
          <p>
            <b>{content}</b>
          </p>
          {showDescription && description.map((item) => <li>{item}</li>)}
          {showAchievements && <b>Logros:</b>}
          {showAchievements && achievements.map((item) => <li>{item}</li>)}
          <div>
            <b>Tecnologías utilizadas:</b>
            <div className="row">
              {technologies?.split(",").map((tech, index) => (
                <div className="col-6" key={index}>
                  <li>{tech}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default Timeline;
