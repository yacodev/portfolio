import ScrollAnimation from "react-animate-on-scroll";

function Pagetitle({ title }) {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeInOut"
        animateOnce={true}
      >
        <h2 className="section-title">{title}</h2>
      </ScrollAnimation>
      <div className="spacer" data-height="20"></div>
    </>
  );
}

export default Pagetitle;
